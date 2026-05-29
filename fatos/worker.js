// FatosTrade — Cloudflare Worker CORS Proxy
// deploy: https://workers.cloudflare.com (ücretsiz, 100k istek/gün)

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const target = url.searchParams.get('url');

    if (!target) {
      return new Response('?url= parametresi gerekli', { status: 400 });
    }

    // Sadece Yahoo Finance'e izin ver
    if (!target.includes('yahoo.com') && !target.includes('finance.yahoo')) {
      return new Response('Sadece Yahoo Finance desteklenir', { status: 403 });
    }

    try {
      const resp = await fetch(target, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; FatosTrade/1.0)',
          'Accept': 'application/json',
        }
      });
      const data = await resp.text();
      return new Response(data, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Cache-Control': 'no-cache',
        }
      });
    } catch (e) {
      return new Response(JSON.stringify({ error: e.message }), {
        status: 500,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
      });
    }
  }
};
