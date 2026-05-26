import { Router } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const authRouter = Router();

authRouter.post("/login", async (req, res) => {
  const { password } = req.body as { password?: string };
  if (!password) {
    res.status(400).json({ error: "Password required" });
    return;
  }

  const hash = process.env.ADMIN_PASSWORD_HASH;
  if (!hash) {
    res.status(500).json({ error: "Server misconfigured: ADMIN_PASSWORD_HASH not set" });
    return;
  }

  const valid = await bcrypt.compare(password, hash);
  if (!valid) {
    res.status(401).json({ error: "Invalid password" });
    return;
  }

  const token = jwt.sign({ admin: true }, process.env.JWT_SECRET!, { expiresIn: "8h" });
  res
    .cookie("token", token, {
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
      maxAge: 8 * 60 * 60 * 1000,
    })
    .json({ ok: true });
});

authRouter.post("/logout", (_req, res) => {
  res.clearCookie("token").json({ ok: true });
});

authRouter.get("/me", (req, res) => {
  const token = req.cookies?.token as string | undefined;
  if (!token) { res.json({ authenticated: false }); return; }
  try {
    jwt.verify(token, process.env.JWT_SECRET!);
    res.json({ authenticated: true });
  } catch {
    res.json({ authenticated: false });
  }
});
