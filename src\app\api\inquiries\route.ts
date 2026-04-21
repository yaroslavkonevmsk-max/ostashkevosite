import { NextResponse } from "next/server";

import { inquirySchema } from "@/lib/inquiry";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body) {
    return NextResponse.json(
      { success: false, message: "Не удалось обработать запрос." },
      { status: 400 }
    );
  }

  const parsed = inquirySchema.safeParse(body);

  if (!parsed.success) {
    const firstIssue = parsed.error.issues[0];

    return NextResponse.json(
      {
        success: false,
        message: firstIssue?.message ?? "Проверьте корректность заполнения формы."
      },
      { status: 400 }
    );
  }

  if (parsed.data.website) {
    return NextResponse.json(
      {
        success: true,
        message: "Запрос принят."
      },
      { status: 200 }
    );
  }

  console.log("New B2B inquiry:", parsed.data);

  return NextResponse.json({
    success: true,
    message:
      "Запрос принят. Менеджер свяжется с вами после проверки параметров партии."
  });
}
