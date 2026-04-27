export const IlluVLAN = () => (
  <svg viewBox="0 0 320 180" style={{ width: '100%', height: '100%', display: 'block' }}>
    <rect width="320" height="180" fill="#0d1a2e" />
    {[0,1,2,3,4,5,6,7,8].map(i => <line key={'v'+i} x1={i*40} y1="0" x2={i*40} y2="180" stroke="rgba(59,130,246,0.06)" strokeWidth="1" />)}
    {[0,1,2,3,4].map(i => <line key={'h'+i} x1="0" y1={i*45} x2="320" y2={i*45} stroke="rgba(59,130,246,0.06)" strokeWidth="1" />)}
    <rect x="130" y="72" width="60" height="36" rx="5" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="1.5" />
    <text x="160" y="87" textAnchor="middle" fill="#60a5fa" fontSize="8" fontFamily="monospace">SWITCH</text>
    <text x="160" y="100" textAnchor="middle" fill="rgba(96,165,250,0.5)" fontSize="6.5" fontFamily="monospace">802.1Q</text>
    {[[30,40],[30,100],[30,150]].map(([x,y],i) => (
      <g key={i}>
        <rect x={x-18} y={y-13} width="36" height="26" rx="4" fill="#162844" stroke="#3b82f6" strokeWidth="1" />
        <text x={x} y={y-1} textAnchor="middle" fill="#93c5fd" fontSize="7" fontFamily="monospace">PC{i+1}</text>
        <text x={x} y={y+9} textAnchor="middle" fill="rgba(147,197,253,0.45)" fontSize="5.5" fontFamily="monospace">V10</text>
        <line x1={x+18} y1={y} x2="130" y2="90" stroke="#3b82f6" strokeWidth="1" strokeDasharray="3,2" opacity="0.5" />
      </g>
    ))}
    {[[285,40],[285,100],[285,150]].map(([x,y],i) => (
      <g key={i}>
        <rect x={x-18} y={y-13} width="36" height="26" rx="4" fill="#1c1640" stroke="#818cf8" strokeWidth="1" />
        <text x={x} y={y-1} textAnchor="middle" fill="#a5b4fc" fontSize="7" fontFamily="monospace">PC{i+4}</text>
        <text x={x} y={y+9} textAnchor="middle" fill="rgba(165,180,252,0.45)" fontSize="5.5" fontFamily="monospace">V20</text>
        <line x1={x-18} y1={y} x2="190" y2="90" stroke="#818cf8" strokeWidth="1" strokeDasharray="3,2" opacity="0.5" />
      </g>
    ))}
    <rect x="5" y="5" width="50" height="15" rx="3" fill="rgba(59,130,246,0.18)" />
    <text x="30" y="16" textAnchor="middle" fill="#60a5fa" fontSize="7" fontFamily="monospace" fontWeight="bold">VLAN 10</text>
    <rect x="265" y="5" width="50" height="15" rx="3" fill="rgba(129,140,248,0.18)" />
    <text x="290" y="16" textAnchor="middle" fill="#a5b4fc" fontSize="7" fontFamily="monospace" fontWeight="bold">VLAN 20</text>
    <circle cx="160" cy="90" r="55" fill="none" stroke="rgba(59,130,246,0.1)" strokeWidth="25" />
  </svg>
);

export const IlluWireGuard = () => (
  <svg viewBox="0 0 320 180" style={{ width: '100%', height: '100%', display: 'block' }}>
    <rect width="320" height="180" fill="#0a1a14" />
    <rect x="16" y="58" width="58" height="64" rx="6" fill="#0d2318" stroke="#22c55e" strokeWidth="1.5" />
    {[0,1,2].map(i => <rect key={i} x="24" y={68+i*12} width={[40,28,34][i]} height="5" rx="2" fill={`rgba(34,197,94,${[0.4,0.2,0.25][i]})`} />)}
    <circle cx="34" cy="108" r="4" fill="#22c55e" opacity="0.7" />
    <rect x="246" y="58" width="58" height="64" rx="6" fill="#0d2318" stroke="#22c55e" strokeWidth="1.5" />
    {[0,1,2].map(i => <rect key={i} x="254" y={68+i*12} width={[40,28,34][i]} height="5" rx="2" fill={`rgba(34,197,94,${[0.4,0.2,0.25][i]})`} />)}
    <circle cx="264" cy="108" r="4" fill="#22c55e" opacity="0.7" />
    <path d="M74 78 Q160 48 246 78" fill="none" stroke="rgba(34,197,94,0.25)" strokeWidth="7" strokeDasharray="4,3" />
    <path d="M74 102 Q160 132 246 102" fill="none" stroke="rgba(34,197,94,0.25)" strokeWidth="7" strokeDasharray="4,3" />
    <path d="M74 78 Q160 48 246 78" fill="none" stroke="#22c55e" strokeWidth="1.3" strokeDasharray="4,3" />
    <path d="M74 102 Q160 132 246 102" fill="none" stroke="#22c55e" strokeWidth="1.3" strokeDasharray="4,3" />
    <path d="M160 68 l-18 8v16c0 10 18 18 18 18s18-8 18-18V76z" fill="#0a2010" stroke="#22c55e" strokeWidth="1.5" />
    <path d="M153 92 l5 5 9-9" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <text x="160" y="168" textAnchor="middle" fill="rgba(34,197,94,0.3)" fontSize="7" fontFamily="monospace">ChaCha20 · Curve25519</text>
  </svg>
);

export const IlluDocker = () => (
  <svg viewBox="0 0 320 180" style={{ width: '100%', height: '100%', display: 'block' }}>
    <rect width="320" height="180" fill="#041a14" />
    {[0,80,160,240,320].map((x,i) => <line key={'v'+i} x1={x} y1="0" x2={x} y2="180" stroke="rgba(13,148,136,0.05)" strokeWidth="1" />)}
    {[0,60,120,180].map((y,i) => <line key={'h'+i} x1="0" y1={y} x2="320" y2={y} stroke="rgba(13,148,136,0.05)" strokeWidth="1" />)}
    {[{y:130,t:'OS Katmanı',o:0.22},{y:106,t:'Kütüphaneler',o:0.42},{y:82,t:'Uygulama Kodu',o:0.7}].map(({y,t,o},i) => (
      <g key={i}>
        <rect x="95" y={y} width="130" height="22" rx="3" fill={`rgba(13,148,136,${o*0.12})`} stroke={`rgba(13,148,136,${o})`} strokeWidth="1.5" />
        <text x="160" y={y+14} textAnchor="middle" fill={`rgba(13,148,136,${o})`} fontSize="8" fontFamily="monospace">{t}</text>
      </g>
    ))}
    <text x="160" y="168" textAnchor="middle" fill="rgba(13,148,136,0.25)" fontSize="6.5" fontFamily="monospace" letterSpacing="1">İMAJ (image)</text>
    <rect x="12" y="14" width="72" height="44" rx="5" fill="rgba(13,148,136,0.06)" stroke="rgba(13,148,136,0.45)" strokeWidth="1.5" />
    <text x="48" y="33" textAnchor="middle" fill="rgba(13,148,136,0.6)" fontSize="7.5" fontFamily="monospace">geliştirme</text>
    <text x="48" y="47" textAnchor="middle" fill="rgba(13,148,136,0.35)" fontSize="6.5" fontFamily="monospace">konteyner ✓</text>
    <rect x="236" y="14" width="72" height="44" rx="5" fill="rgba(13,148,136,0.06)" stroke="rgba(13,148,136,0.45)" strokeWidth="1.5" />
    <text x="272" y="33" textAnchor="middle" fill="rgba(13,148,136,0.6)" fontSize="7.5" fontFamily="monospace">prodüksiyon</text>
    <text x="272" y="47" textAnchor="middle" fill="rgba(13,148,136,0.35)" fontSize="6.5" fontFamily="monospace">konteyner ✓</text>
    <line x1="140" y1="82" x2="84" y2="58" stroke="rgba(13,148,136,0.2)" strokeWidth="1" strokeDasharray="3,2" />
    <line x1="180" y1="82" x2="236" y2="58" stroke="rgba(13,148,136,0.2)" strokeWidth="1" strokeDasharray="3,2" />
    <text x="160" y="72" textAnchor="middle" fill="rgba(13,148,136,0.22)" fontSize="7" fontFamily="monospace">aynı imajdan</text>
  </svg>
);

export const IlluDNS = () => (
  <svg viewBox="0 0 320 180" style={{ width: '100%', height: '100%', display: 'block' }}>
    <rect width="320" height="180" fill="#120a1e" />
    <circle cx="160" cy="24" r="18" fill="#1e1035" stroke="#a78bfa" strokeWidth="1.5" />
    <text x="160" y="22" textAnchor="middle" fill="#a78bfa" fontSize="7.5" fontFamily="monospace">ROOT</text>
    <text x="160" y="32" textAnchor="middle" fill="rgba(167,139,250,0.45)" fontSize="5.5" fontFamily="monospace">13 srv</text>
    {[{x:72,label:'.com'},{x:160,label:'.net'},{x:248,label:'.tr'}].map(({x,label},i) => (
      <g key={i}>
        <line x1="160" y1="42" x2={x} y2="72" stroke="rgba(167,139,250,0.25)" strokeWidth="1" strokeDasharray="3,2" />
        <rect x={x-20} y="72" width="40" height="22" rx="4" fill="#1e1035" stroke="#7c3aed" strokeWidth="1" />
        <text x={x} y="86" textAnchor="middle" fill="#c4b5fd" fontSize="9" fontFamily="monospace">{label}</text>
      </g>
    ))}
    {[{x:48,parent:72},{x:96,parent:72},{x:194,parent:160},{x:248,parent:248},{x:290,parent:248}].map(({x,parent},i) => (
      <g key={i}>
        <line x1={parent} y1="94" x2={x} y2="120" stroke="rgba(124,58,237,0.2)" strokeWidth="1" strokeDasharray="2,2" />
        <rect x={x-22} y="120" width="44" height="20" rx="3" fill="#160e30" stroke="rgba(124,58,237,0.35)" strokeWidth="1" />
        <text x={x} y="133" textAnchor="middle" fill="rgba(196,181,253,0.6)" fontSize="6" fontFamily="monospace">{['google','github','anla','metu','boun'][i]}.{i<2?'com':i===4?'edu':'tr'}</text>
      </g>
    ))}
    <rect x="88" y="152" width="144" height="15" rx="3" fill="rgba(167,139,250,0.08)" stroke="rgba(167,139,250,0.18)" strokeWidth="1" />
    <text x="160" y="163" textAnchor="middle" fill="#a78bfa" fontSize="6.5" fontFamily="monospace">→ 142.250.74.46</text>
  </svg>
);

export const IlluVPN = () => (
  <svg viewBox="0 0 320 180" style={{ width: '100%', height: '100%', display: 'block' }}>
    <rect width="320" height="180" fill="#1a0808" />
    <circle cx="160" cy="88" r="66" fill="#160808" stroke="rgba(225,29,72,0.2)" strokeWidth="1" />
    {[-32,0,32].map((y,i) => <ellipse key={i} cx="160" cy={88+y} rx={Math.max(1,Math.sqrt(66*66-y*y))} ry="11" fill="none" stroke="rgba(225,29,72,0.08)" strokeWidth="1" />)}
    {[-30,0,30].map((x,i) => <ellipse key={i} cx={160+x} cy="88" rx="11" ry="66" fill="none" stroke="rgba(225,29,72,0.08)" strokeWidth="1" />)}
    <path d="M160 46 l-24 10v20c0 16 24 28 24 28s24-12 24-28V56z" fill="#2a0808" stroke="#e11d48" strokeWidth="2" />
    <path d="M151 78 l5.5 6.5 13-13" stroke="#e11d48" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    {[[116,58],[204,108],[138,128],[188,52]].map(([x,y],i) => (
      <g key={i}>
        <circle cx={x} cy={y} r="3" fill="rgba(225,29,72,0.55)" />
        <line x1={x} y1={y} x2="160" y2="76" stroke="rgba(225,29,72,0.2)" strokeWidth="1" strokeDasharray="2,2" />
      </g>
    ))}
    <text x="160" y="170" textAnchor="middle" fill="rgba(225,29,72,0.35)" fontSize="7" fontFamily="monospace">TRAFİĞİNİZ ŞİFRELENİYOR</text>
  </svg>
);

export const IlluSSH = () => (
  <svg viewBox="0 0 320 180" style={{ width: '100%', height: '100%', display: 'block' }}>
    <rect width="320" height="180" fill="#050f0a" />
    <rect x="14" y="14" width="292" height="154" rx="8" fill="#091408" stroke="rgba(34,197,94,0.2)" strokeWidth="1" />
    <rect x="14" y="14" width="292" height="24" rx="8" fill="#0e2010" />
    <rect x="14" y="26" width="292" height="12" fill="#0e2010" />
    <circle cx="32" cy="26" r="5" fill="#ef4444" opacity="0.65" />
    <circle cx="48" cy="26" r="5" fill="#eab308" opacity="0.65" />
    <circle cx="64" cy="26" r="5" fill="#22c55e" opacity="0.65" />
    <text x="160" y="30" textAnchor="middle" fill="rgba(34,197,94,0.3)" fontSize="7.5" fontFamily="monospace">ssh user@server — bash</text>
    {[
      { y: 58,  t: '$ ssh kullanici@192.168.1.100',               c: '#22c55e' },
      { y: 73,  t: "The authenticity of host can't be established.", c: 'rgba(34,197,94,0.45)' },
      { y: 88,  t: 'Are you sure you want to continue? (yes) yes', c: 'rgba(34,197,94,0.35)' },
      { y: 103, t: 'Welcome to Ubuntu 22.04.3 LTS (GNU/Linux)',    c: 'rgba(34,197,94,0.45)' },
      { y: 118, t: 'kullanici@server:~$ ls -la /var/www',          c: '#22c55e' },
      { y: 133, t: 'drwxr-xr-x  nginx  nginx  4096 Apr 24 09:31 html', c: 'rgba(34,197,94,0.4)' },
      { y: 148, t: 'kullanici@server:~$ █',                         c: '#22c55e' },
    ].map(({ y, t, c }) => <text key={y} x="24" y={y} fill={c} fontSize="8" fontFamily="monospace">{t}</text>)}
  </svg>
);

export const IlluBlockchain = () => (
  <svg viewBox="0 0 320 180" style={{ width: '100%', height: '100%', display: 'block' }}>
    <rect width="320" height="180" fill="#0e0a1e" />
    {[{x:8,n:'#1',h:'3f8a',p:'0000'},{x:82,n:'#2',h:'7c2b',p:'3f8a'},{x:156,n:'#3',h:'a91d',p:'7c2b'},{x:230,n:'#4',h:'e4f2',p:'a91d'}].map(({x,n,h,p},i) => (
      <g key={i}>
        {i > 0 && <>
          <line x1={x-2} y1="88" x2={x+2} y2="88" stroke="#7c3aed" strokeWidth="7" strokeLinecap="round" />
          <line x1={x-8} y1="88" x2={x-1} y2="88" stroke="rgba(124,58,237,0.45)" strokeWidth="1.5" />
        </>}
        <rect x={x} y="44" width="72" height="88" rx="5" fill="#150e30" stroke="#7c3aed" strokeWidth="1.5" />
        <rect x={x} y="44" width="72" height="20" rx="5" fill="#1e1040" />
        <rect x={x+5} y="55" width="72" height="10" fill="#1e1040" />
        <text x={x+36} y="57" textAnchor="middle" fill="#a78bfa" fontSize="8" fontFamily="monospace" fontWeight="bold">BLOK {n}</text>
        <text x={x+5} y="78" fill="rgba(167,139,250,0.4)" fontSize="5.5" fontFamily="monospace">HASH</text>
        <text x={x+5} y="88" fill="#c4b5fd" fontSize="6.5" fontFamily="monospace">0x{h}…</text>
        <text x={x+5} y="101" fill="rgba(167,139,250,0.4)" fontSize="5.5" fontFamily="monospace">PREV</text>
        <text x={x+5} y="111" fill="rgba(196,181,253,0.5)" fontSize="6.5" fontFamily="monospace">0x{p}…</text>
        <text x={x+5} y="124" fill="rgba(167,139,250,0.35)" fontSize="5.5" fontFamily="monospace">{[5,3,8,4][i]} TX</text>
      </g>
    ))}
    <rect x="230" y="142" width="72" height="28" rx="5" fill="none" stroke="rgba(124,58,237,0.25)" strokeWidth="1" strokeDasharray="3,2" />
    <text x="266" y="159" textAnchor="middle" fill="rgba(167,139,250,0.25)" fontSize="7" fontFamily="monospace">#5 bekliyor…</text>
  </svg>
);

export const IlluTCPIP = () => (
  <svg viewBox="0 0 320 180" style={{ width: '100%', height: '100%', display: 'block' }}>
    <rect width="320" height="180" fill="#081218" />
    {[
      { y: 18,  label: 'Uygulama', color: 'rgba(6,182,212,0.75)' },
      { y: 58,  label: 'TCP',      color: 'rgba(6,182,212,0.6)'  },
      { y: 98,  label: 'IP',       color: 'rgba(6,182,212,0.45)' },
      { y: 138, label: 'Ağ Erişim',color: 'rgba(6,182,212,0.3)'  },
    ].map(({ y, label, color }, i) => (
      <g key={i}>
        <rect x="14" y={y} width="180" height="34" rx="4" fill={`rgba(6,182,212,${0.04+i*0.01})`} stroke={color} strokeWidth="1" />
        <text x="104" y={y+21} textAnchor="middle" fill={color} fontSize="9.5" fontFamily="monospace">{label} Katmanı</text>
        {[0,1,2].map(j => (
          <rect key={j} x={210+j*36} y={y+5} width="28" height="24" rx="3"
            fill={`rgba(6,182,212,${0.1+i*0.03})`}
            stroke={`rgba(6,182,212,${0.35-i*0.04})`}
            strokeWidth="1" />
        ))}
        {[0,1,2].map(j => (
          <text key={j} x={224+j*36} y={y+20} textAnchor="middle"
            fill={`rgba(6,182,212,${0.5-i*0.05})`}
            fontSize="6" fontFamily="monospace">PKT</text>
        ))}
      </g>
    ))}
    <path d="M203 18 L310 18 L310 172 L203 172" fill="none" stroke="rgba(6,182,212,0.1)" strokeWidth="1.5" strokeDasharray="3,2" />
    <text x="162" y="176" textAnchor="middle" fill="rgba(6,182,212,0.22)" fontSize="6.5" fontFamily="monospace">GÖNDERİCİ → ALICI</text>
  </svg>
);

export const IlluAgenticAI = () => (
  <svg viewBox="0 0 320 180" style={{ width: '100%', height: '100%', display: 'block' }}>
    <rect width="320" height="180" fill="#180d00" />
    {[0,64,128,192,256,320].map((x,i) => <line key={'v'+i} x1={x} y1="0" x2={x} y2="180" stroke="rgba(217,119,6,0.05)" strokeWidth="1" />)}
    {[0,60,120,180].map((y,i) => <line key={'h'+i} x1="0" y1={y} x2="320" y2={y} stroke="rgba(217,119,6,0.05)" strokeWidth="1" />)}
    {/* spokes from orchestrator to agents */}
    {[[160,20],[225,67],[200,143],[120,143],[95,67]].map(([x,y],i) => (
      <line key={'s'+i} x1="160" y1="90" x2={x} y2={y} stroke="rgba(217,119,6,0.32)" strokeWidth="1.3" strokeDasharray="4,3" />
    ))}
    {/* pentagon ring between agents */}
    <polygon points="160,20 225,67 200,143 120,143 95,67" fill="none" stroke="rgba(217,119,6,0.1)" strokeWidth="1" />
    {/* outer agent nodes */}
    {[[160,20,'WEB'],[225,67,'KOD'],[200,143,'TEST'],[120,143,'YAZ'],[95,67,'İZLE']].map(([x,y,lbl],i) => (
      <g key={'a'+i}>
        <circle cx={x} cy={y} r="14" fill="#1e1000" stroke="rgba(217,119,6,0.55)" strokeWidth="1.5" />
        <text x={x} y={y+4} textAnchor="middle" fill="rgba(217,119,6,0.75)" fontSize="6" fontFamily="monospace">{lbl}</text>
      </g>
    ))}
    {/* center orchestrator */}
    <circle cx="160" cy="90" r="22" fill="#241400" stroke="var(--amber)" strokeWidth="2" />
    <text x="160" y="87" textAnchor="middle" fill="var(--amber)" fontSize="7" fontFamily="monospace" fontWeight="bold">AJAN</text>
    <text x="160" y="98" textAnchor="middle" fill="rgba(217,119,6,0.5)" fontSize="5.5" fontFamily="monospace">YÖNETİCİ</text>
    <text x="160" y="172" textAnchor="middle" fill="rgba(217,119,6,0.22)" fontSize="6.5" fontFamily="monospace">multi-agent · ReAct döngüsü</text>
  </svg>
);

export const IlluLocalLLM = () => (
  <svg viewBox="0 0 320 180" style={{ width: '100%', height: '100%', display: 'block' }}>
    <rect width="320" height="180" fill="#180d00" />
    {/* laptop lid */}
    <rect x="80" y="18" width="160" height="106" rx="6" fill="#100800" stroke="rgba(217,119,6,0.4)" strokeWidth="1.5" />
    {/* screen glass */}
    <rect x="90" y="26" width="140" height="90" rx="3" fill="#0a0500" />
    {/* keyboard base */}
    <rect x="65" y="124" width="190" height="9" rx="3" fill="#100800" stroke="rgba(217,119,6,0.3)" strokeWidth="1.2" />
    <rect x="125" y="124" width="70" height="4" rx="1" fill="rgba(217,119,6,0.08)" />
    {/* neural net: input→hidden connections */}
    {[44,62,80,98].flatMap(iy => [44,62,80,98].map(hy => (
      <line key={`ih-${iy}-${hy}`} x1="120" y1={iy} x2="160" y2={hy} stroke="rgba(217,119,6,0.1)" strokeWidth="0.7" />
    )))}
    {/* hidden→output connections */}
    {[44,62,80,98].flatMap(hy => [62,80].map(oy => (
      <line key={`ho-${hy}-${oy}`} x1="160" y1={hy} x2="200" y2={oy} stroke="rgba(217,119,6,0.15)" strokeWidth="0.8" />
    )))}
    {/* input layer */}
    {[44,62,80,98].map(y => (
      <circle key={'i'+y} cx="120" cy={y} r="5" fill="#1e1000" stroke="rgba(217,119,6,0.45)" strokeWidth="1.2" />
    ))}
    {/* hidden layer */}
    {[44,62,80,98].map(y => (
      <circle key={'h'+y} cx="160" cy={y} r="5" fill="#201200" stroke="rgba(217,119,6,0.65)" strokeWidth="1.2" />
    ))}
    {/* output layer */}
    {[62,80].map(y => (
      <circle key={'o'+y} cx="200" cy={y} r="6.5" fill="#261600" stroke="var(--amber)" strokeWidth="1.5" />
    ))}
    <text x="160" y="109" textAnchor="middle" fill="rgba(217,119,6,0.28)" fontSize="5.5" fontFamily="monospace">GGUF · 4-bit · llama.cpp</text>
    <text x="160" y="172" textAnchor="middle" fill="rgba(217,119,6,0.22)" fontSize="6.5" fontFamily="monospace">yerel model · sıfır bulut</text>
  </svg>
);

export const IlluMCP = () => (
  <svg viewBox="0 0 320 180" style={{ width: '100%', height: '100%', display: 'block' }}>
    <rect width="320" height="180" fill="#180d00" />
    {[0,64,128,192,256,320].map((x,i) => <line key={'v'+i} x1={x} y1="0" x2={x} y2="180" stroke="rgba(217,119,6,0.05)" strokeWidth="1" />)}
    {[0,60,120,180].map((y,i) => <line key={'h'+i} x1="0" y1={y} x2="320" y2={y} stroke="rgba(217,119,6,0.05)" strokeWidth="1" />)}
    {/* spokes from hub to tools */}
    {[[160,18],[228,56],[205,148],[115,148],[92,56]].map(([x,y],i) => (
      <line key={'sp'+i} x1="160" y1="90" x2={x} y2={y} stroke="rgba(217,119,6,0.38)" strokeWidth="1.5" />
    ))}
    {/* FILE tool */}
    <rect x="146" y="7" width="28" height="22" rx="3" fill="#1e1000" stroke="rgba(217,119,6,0.55)" strokeWidth="1.3" />
    <path d="M165,7 v8 h8" fill="none" stroke="rgba(217,119,6,0.4)" strokeWidth="1" />
    <text x="160" y="22" textAnchor="middle" fill="rgba(217,119,6,0.65)" fontSize="6" fontFamily="monospace">FILE</text>
    {/* CALENDAR tool */}
    <rect x="214" y="45" width="28" height="22" rx="3" fill="#1e1000" stroke="rgba(217,119,6,0.55)" strokeWidth="1.3" />
    <text x="228" y="60" textAnchor="middle" fill="rgba(217,119,6,0.65)" fontSize="6" fontFamily="monospace">CAL</text>
    {/* CODE tool */}
    <rect x="191" y="137" width="28" height="22" rx="3" fill="#1e1000" stroke="rgba(217,119,6,0.55)" strokeWidth="1.3" />
    <text x="205" y="152" textAnchor="middle" fill="rgba(217,119,6,0.65)" fontSize="8" fontFamily="monospace">{ }</text>
    {/* DB tool */}
    <rect x="101" y="137" width="28" height="22" rx="3" fill="#1e1000" stroke="rgba(217,119,6,0.55)" strokeWidth="1.3" />
    {[0,1,2].map(i => <line key={'db'+i} x1="107" y1={144+i*4} x2="123" y2={144+i*4} stroke="rgba(217,119,6,0.5)" strokeWidth="1" />)}
    {/* GIT tool */}
    <rect x="78" y="45" width="28" height="22" rx="3" fill="#1e1000" stroke="rgba(217,119,6,0.55)" strokeWidth="1.3" />
    <text x="92" y="60" textAnchor="middle" fill="rgba(217,119,6,0.65)" fontSize="6" fontFamily="monospace">GIT</text>
    {/* center MCP hub */}
    <circle cx="160" cy="90" r="24" fill="#241400" stroke="var(--amber)" strokeWidth="2" />
    <text x="160" y="87" textAnchor="middle" fill="var(--amber)" fontSize="8" fontFamily="monospace" fontWeight="bold">MCP</text>
    <text x="160" y="99" textAnchor="middle" fill="rgba(217,119,6,0.5)" fontSize="5.5" fontFamily="monospace">protokol</text>
    <text x="160" y="172" textAnchor="middle" fill="rgba(217,119,6,0.22)" fontSize="6.5" fontFamily="monospace">standart araç bağlantısı</text>
  </svg>
);

export const IlluAkilliEv = () => (
  <svg viewBox="0 0 320 180" style={{ width: '100%', height: '100%', display: 'block' }}>
    <rect width="320" height="180" fill="#0e0a1e" />
    {[0,64,128,192,256,320].map((x,i) => <line key={'v'+i} x1={x} y1="0" x2={x} y2="180" stroke="rgba(124,58,237,0.05)" strokeWidth="1" />)}
    {[0,60,120,180].map((y,i) => <line key={'h'+i} x1="0" y1={y} x2="320" y2={y} stroke="rgba(124,58,237,0.05)" strokeWidth="1" />)}
    {/* wifi arcs from roof peak (160,62) — counter-clockwise = opens upward */}
    <path d="M148,62 A12,12 0 0,0 172,62" fill="none" stroke="rgba(124,58,237,0.75)" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M136,62 A24,24 0 0,0 184,62" fill="none" stroke="rgba(124,58,237,0.45)" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M124,62 A36,36 0 0,0 196,62" fill="none" stroke="rgba(124,58,237,0.22)" strokeWidth="1.4" strokeLinecap="round" />
    {/* device mesh connection lines */}
    {[[45,75],[275,80],[38,140],[282,140]].map(([x,y],i) => (
      <line key={'dl'+i} x1={x} y1={y} x2="160" y2="90" stroke="rgba(124,58,237,0.15)" strokeWidth="1" strokeDasharray="3,3" />
    ))}
    {/* house body */}
    <rect x="110" y="105" width="100" height="62" rx="2" fill="#130e28" stroke="rgba(124,58,237,0.6)" strokeWidth="1.5" />
    {/* roof */}
    <polygon points="95,107 160,62 225,107" fill="#100c24" stroke="rgba(124,58,237,0.7)" strokeWidth="1.5" />
    {/* door */}
    <rect x="148" y="136" width="24" height="31" rx="2" fill="rgba(124,58,237,0.1)" stroke="rgba(124,58,237,0.38)" strokeWidth="1" />
    {/* windows */}
    <rect x="118" y="115" width="20" height="18" rx="2" fill="rgba(124,58,237,0.07)" stroke="rgba(124,58,237,0.3)" strokeWidth="1" />
    <rect x="182" y="115" width="20" height="18" rx="2" fill="rgba(124,58,237,0.07)" stroke="rgba(124,58,237,0.3)" strokeWidth="1" />
    {/* signal source dot at roof peak */}
    <circle cx="160" cy="62" r="3.5" fill="var(--purple)" />
    {/* device nodes */}
    {[[45,75,'ZB'],[275,80,'TH'],[38,140,'MT'],[282,140,'MT']].map(([x,y,lbl],i) => (
      <g key={'dv'+i}>
        <circle cx={x} cy={y} r="11" fill="#130a20" stroke="rgba(124,58,237,0.55)" strokeWidth="1.3" />
        <text x={x} y={y+4} textAnchor="middle" fill="rgba(124,58,237,0.72)" fontSize="5.5" fontFamily="monospace">{lbl}</text>
      </g>
    ))}
    <text x="160" y="172" textAnchor="middle" fill="rgba(124,58,237,0.22)" fontSize="6.5" fontFamily="monospace">Zigbee · Thread · Matter</text>
  </svg>
);

export const ILLUS = {
  'vlan-nedir':              IlluVLAN,
  'wireguard-nasil-calisir': IlluWireGuard,
  'dns-nedir':               IlluDNS,
  'vpn-nedir':               IlluVPN,
  'ssh-nedir':               IlluSSH,
  'blockchain-nedir':        IlluBlockchain,
  'tcp-ip-nedir':            IlluTCPIP,
  'docker-nedir':            IlluDocker,
  'agentic-ai-nedir':        IlluAgenticAI,
  'local-llm-nedir':         IlluLocalLLM,
  'mcp-nedir':               IlluMCP,
  'akilli-ev-protokolleri':  IlluAkilliEv,
};
