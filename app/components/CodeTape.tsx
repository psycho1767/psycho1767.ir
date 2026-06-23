'use client'

export default function CodeTape() {
  const items = [
    'react && next.js',
    'typescript strict',
    'python + fastapi',
    'postgresql queries',
    'tailwind css',
    'rest api design',
    'git workflows',
    'ci/cd pipelines',
    'docker containers',
    'aws deployment',
  ]

  return (
    <section className="relative py-6 border-t border-b hairline overflow-hidden">
      <div className="code-tape" aria-hidden="true">
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    </section>
  )
}
