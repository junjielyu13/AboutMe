/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Old CV URL — keep links already sent to recruiters working
      { source: '/Junjie_Li_CV.pdf', destination: '/Software_Engineer_Junjie_Li.pdf', permanent: true },
    ]
  },
}

module.exports = nextConfig
