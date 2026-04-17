import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { locales, defaultLocale, isValidLocale } from '@/lib/i18n';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // 静态文件和 API 路由不处理
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.') ||
    pathname === '/favicon.ico'
  ) {
    return;
  }

  // 检查路径是否已包含语言前缀
  const pathnameSegments = pathname.split('/').filter(Boolean);
  const firstSegment = pathnameSegments[0];

  // 如果已有有效的语言前缀，继续
  if (firstSegment && isValidLocale(firstSegment)) {
    return;
  }

  // 没有 language 前缀，重定向到默认语言
  const locale = defaultLocale;
  const newUrl = new URL(`/${locale}${pathname}`, request.url);
  return NextResponse.redirect(newUrl);
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
