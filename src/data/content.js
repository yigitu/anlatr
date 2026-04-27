import vlanNedir from './articles/vlan-nedir.js';
import wireguardNasilCalisir from './articles/wireguard-nasil-calisir.js';
import dnsNedir from './articles/dns-nedir.js';
import vpnNedir from './articles/vpn-nedir.js';
import sshNedir from './articles/ssh-nedir.js';
import blockchainNedir from './articles/blockchain-nedir.js';
import tcpIpNedir from './articles/tcp-ip-nedir.js';
import dockerNedir from './articles/docker-nedir.js';
import agenticAiNedir from './articles/agentic-ai-nedir.js';
import localLlmNedir from './articles/local-llm-nedir.js';
import mcpNedir from './articles/mcp-nedir.js';
import akilliEvProtokolleri from './articles/akilli-ev-protokolleri.js';

export const CAT = {
  "Ağ":         { c: "var(--blue)",   bg: "var(--blue-l)"   },
  "Güvenlik":   { c: "var(--rose)",   bg: "var(--rose-l)"   },
  "Teknoloji":  { c: "var(--purple)", bg: "var(--purple-l)" },
  "Yazılım":    { c: "var(--teal)",   bg: "var(--teal-l)"   },
  "Yapay Zeka": { c: "var(--amber)",  bg: "var(--amber-l)"  },
};

export const CONTENT = [
  vlanNedir,
  wireguardNasilCalisir,
  dnsNedir,
  vpnNedir,
  sshNedir,
  blockchainNedir,
  tcpIpNedir,
  dockerNedir,
  agenticAiNedir,
  localLlmNedir,
  mcpNedir,
  akilliEvProtokolleri,
];

export const FEATURED = CONTENT.find(c => c.featured) || CONTENT[0];
