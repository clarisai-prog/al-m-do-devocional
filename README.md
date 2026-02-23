# 📱 Além do Devocional

> Um Progressive Web App (PWA) de devocional interativo com design elegante e funcionalidade offline.

## 🎯 Características

- ✨ **Design Elegante** - Paleta Elohim Kainos (Light Mode)
- 📱 **PWA Completo** - Instale como app no seu celular
- 🔴 **Funciona Offline** - Service Worker com cache inteligente
- ⚡ **Rápido & Leve** - Otimizado para performance
- 🎨 **Design Tokens** - Sistema de design centralizado
- 📲 **Multiplataforma** - Web, iOS, Android

---

## 🚀 Quick Start

### 1. Clone o Repositório

```bash
git clone https://github.com/SEU_USUARIO/alem-do-devocional.git
cd alem-do-devocional
```

### 2. Teste Localmente

**Opção A: Python**
```bash
python -m http.server 8000
# Acesse: http://localhost:8000
```

**Opção B: Node.js**
```bash
npx serve .
# Acesse: http://localhost:3000 (ou indicado no terminal)
```

### 3. Veja no Navegador

1. Abra: `http://localhost:8000`
2. Instale como app (Chrome: menu → "Instalar app")
3. Funciona offline! 🎉

---

## 📁 Estrutura do Projeto

```
além-do-devocional/
├── index.html              # Página inicial
├── manifest.json           # PWA metadata
├── service-worker.js       # Cache offline
├── design-tokens.css       # Sistema de design
├── .gitignore              # Git exclusions
├── SETUP_GITHUB.md         # Guia de setup
├── README.md               # Este arquivo
│
├── assets/                 # Imagens e vídeos
│   ├── screen-1.png
│   ├── screen-2.png
│   └── videos/
│       └── video-principal.mp4
│
└── icons/                  # PWA icons
    ├── icon-192.png
    ├── icon-512.png
    └── capa-home.png
```

---

## 🎨 Paleta de Cores

| Cor | Código | Nome |
|-----|--------|------|
| #F5F2E9 | `#F5F2E9` | Areia (Background) |
| #1A2238 | `#1A2238` | Navy (Textos) |
| #C8B08A | `#C8B08A` | Dourado (Acentos) |
| #EEBFB8 | `#EEBFB8` | Blush (Secundário) |

---

## 🔧 Desenvolvimento

### Editar Estilos

Todos os estilos estão em `design-tokens.css`. Mudanças globais:

```css
:root {
  --c-bg-areia: #F5F2E9;      /* Mude aqui */
  --c-azul-marinho: #1A2238;  /* Mude aqui */
  /* ... */
}
```

### Adicionar Novas Páginas

1. Crie `nova-pagina.html`
2. Copie a estrutura do `index.html`
3. Atualize o `service-worker.js` com:

```javascript
const ASSETS_TO_CACHE = [
  // ... outros assets
  './nova-pagina.html'  // ← Adicione aqui
];
```

4. Commit e push:

```bash
git add .
git commit -m "Feat: Adicionar nova página"
git push origin main
```

---

## 📊 Performance

Checklist de performance:

- ✅ Imagens otimizadas (< 500KB cada)
- ✅ CSS minificado
- ✅ Service Worker ativo
- ✅ Manifest.json válido
- ✅ Sem JavaScript desnecessário

**Teste:** https://lighthouse.chromium.org/

---

## 🔐 Segurança

⚠️ **NUNCA commitar:**
- Senhas ou tokens
- `.env` files
- Chaves de API
- Informações privadas

Use `.gitignore` para proteger.

---

## 🐛 Troubleshooting

### PWA não instala
```
✓ Verifique se está em HTTPS (GitHub Pages fornece automaticamente)
✓ Valide manifest.json em: https://manifest-validator.appspot.com/
```

### Service Worker não funciona
```
✓ Abra DevTools (F12) → Application → Service Workers
✓ Verifique se está "activated and running"
```

### Cache não atualiza
```
✓ Incremente CACHE_NAME em service-worker.js (v1 → v2)
✓ Commit e push
```

---

## 📚 Recursos

- [PWA Checklist](https://web.dev/pwa-checklist/)
- [Service Workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)
- [GitHub Pages](https://pages.github.com/)
- [Manifest Spec](https://www.w3.org/TR/appmanifest/)

---

## 📞 Suporte

Para dúvidas sobre setup, consulte: [SETUP_GITHUB.md](./SETUP_GITHUB.md)

---

## 📄 License

Este projeto é de código aberto. Sinta-se livre para usar e modificar!

---

**Versão:** 1.0  
**Última atualização:** 23 de fevereiro de 2026  
**Criado com:** ❤️ por GitHub Copilot## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`
