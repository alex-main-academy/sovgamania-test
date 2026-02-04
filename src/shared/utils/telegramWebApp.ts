"use client";

import { Telegram } from "telegram-web-app";

export const telegramWebApp = typeof window !== "undefined" ? window.Telegram?.WebApp : ({} as Telegram["WebApp"]);
