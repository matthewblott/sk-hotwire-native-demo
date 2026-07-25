import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ request }) => {
  const userAgent = request.headers.get('user-agent') ?? '';
  const isNativeApp =
    userAgent.includes('Turbo Native') ||
    userAgent.includes('Hotwire Native');

  return {
    isNativeApp
  };

};
