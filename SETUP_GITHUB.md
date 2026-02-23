# 📱 Além do Devocional - Setup Completo

## 🎯 Visão Geral do Projeto

**Tipo:** Progressive Web App (PWA)  
**Nome:** Além do Devocional  
**Plataforma:** GitHub Pages  
**Linguagens:** HTML5, CSS3, JavaScript  
**Padrão de Design:** Design Tokens + Elohim Kainos (Light Mode)

---

## 🚀 PASSO 1: Setup Inicial Local

### 1.1 Estrutura de Pastas

```
além-do-devocional/
├── index.html                  # Página inicial/capa
├── manifest.json               # PWA Manifest (metadados)
├── service-worker.js           # Cache offline (v1)
├── design-tokens.css           # Design system centralizado
├── swa-cli.config.json         # Config Azure (opcional)
│
├── assets/                     # Imagens grandes
│   ├── screen-1.png
│   ├── screen-2.png
│   ├── videos/
│   │   └── video-principal.mp4
│   └── ...
│
├── icons/                      # Ícones e avatares
│   ├── icon-192.png            # PWA home screen
│   ├── icon-512.png            # PWA splash screen
│   ├── capa-home.png           # Imagem de fundo capa
│   └── favicon.ico
│
└── README.md                   # Documentação (este arquivo)
```

### 1.2 Criar Repository no GitHub

1. Acesse: https://github.com/new
2. Nome do repositório: `alem-do-devocional`
3. Descrição: "PWA de Devocional Interativo com Design Tokens"
4. Visibilidade: **Public** (para GitHub Pages)
5. **NÃO** inicialize com README.md (você já tem)
6. Clique: **Create repository**

---

## 🔗 PASSO 2: Conectar GitHub Localmente

### 2.1 Inicializar Git na Pasta Local

```powershell
cd "C:\Users\santa\Downloads\além-do-devocional"

git init
git add .
git commit -m "Inicial: Estrutura PWA com Design Tokens"
git branch -M main
```

### 2.2 Adicionar Remote e Push

```powershell
# Substitua SEU_USUARIO pelo seu username do GitHub
git remote add origin https://github.com/clarisai-prog/al-m-do-devocional.git
git branch -M main
git push -u origin main
```

**Verificar se funcionou:**
```powershell
git status
# Deve mostrar: "On branch main" e "Your branch is up to date with 'origin/main'."
```

---

## 📋 PASSO 3: Configurar PWA Manifest

### 3.1 Arquivo: `manifest.json`

```json
{
  "name": "Além do Devocional",
  "short_name": "Devocional",
  "description": "Um programa devocional interativo com design elegante",
  "start_url": "https://seu-usuario.github.io/alem-do-devocional/",
  "scope": "/alem-do-devocional/",
  "display": "standalone",
  "orientation": "portrait",
  "theme_color": "#1A2238",
  "background_color": "#F5F2E9",
  "icons": [
    {
      "src": "./icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any"
    },
    {
      "src": "./icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any"
    }
  ],
  "categories": ["lifestyle", "productivity"],
  "screenshots": [
    {
      "src": "./assets/screen-1.png",
      "sizes": "540x720",
      "type": "image/png",
      "form_factor": "narrow"
    },
    {
      "src": "./assets/screen-2.png",
      "sizes": "1280x720",
      "type": "image/png",
      "form_factor": "wide"
    }
  ]
}
```

### 3.2 Adicionar ao `index.html` (dentro da tag `<head>`)

```html
<link rel="manifest" href="./manifest.json">
<meta name="theme-color" content="#1A2238">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="Além do Devocional">
<link rel="icon" type="image/png" href="./icons/favicon.ico">
```

---

## 🔄 PASSO 4: Configurar Service Worker (Offline)

### 4.1 Arquivo: `service-worker.js`

```javascript
const CACHE_NAME = 'alem-devocional-v1';
const OLD_CACHE_VERSIONS = [];

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './design-tokens.css',
  './manifest.json',
  './assets/screen-1.png',
  './icons/icon-192.png',
  './icons/icon-512.png',
  'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Montserrat:wght@400;500;600;700&display=swap',
  'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap'
];

// Install event
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('✅ Cacheando assets...');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .catch((error) => console.error('❌ Erro ao cachear:', error))
  );
});

// Fetch event (Cache-First strategy)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
      .catch(() => caches.match('./index.html'))
  );
});

// Activate event (limpeza de caches antigos)
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('🧹 Limpando cache antiga:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
```

### 4.2 Registrar no `index.html` (final do body)

```html
<script>
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./service-worker.js')
        .then(reg => console.log('✅ SW registrado'))
        .catch(err => console.error('❌ Erro SW:', err));
    });
  }
</script>
```

---

## 🎨 PASSO 5: Design System (design-tokens.css)

### 5.1 Paleta de Cores (Fixa - Light Mode)

```css
:root {
  /* Cores Principais - Paleta Elohim Kainos */
  --c-bg-areia: #F5F2E9;        /* Background principal */
  --c-azul-marinho: #1A2238;    /* Textos e acentos */
  --c-dourado-suave: #C8B08A;   /* Destaque e bordas */
  --c-blush: #EEBFB8;           /* Acentos secundários */
  
  /* Tipografia */
  --f-titulo: 'Playfair Display', serif;
  --f-texto: 'Montserrat', sans-serif;
  
  /* Espaçamento */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
  
  /* Transições */
  --transition-base: 0.3s ease;
}

/* Garantir Light Mode em todos os dispositivos */
body {
  background-color: var(--c-bg-areia) !important;
  color: var(--c-azul-marinho) !important;
  font-family: var(--f-texto);
}
```

---

## 📱 PASSO 6: Habilitar GitHub Pages

### 6.1 Configurar GitHub Pages

1. Acesse seu repositório no GitHub
2. Vá para **Settings** → **Pages**
3. Em "Build and deployment":
   - **Source:** Deploy from a branch
   - **Branch:** main
   - **Folder:** / (root)
4. Clique: **Save**

**Seu PWA estará disponível em:**
```
https://seu-usuario.github.io/alem-do-devocional/
```

### 6.2 Ativar HTTPS

GitHub Pages já fornece HTTPS automaticamente. Isso é importante para:
- ✅ Service Worker funcionar
- ✅ Segurança dos dados
- ✅ Install como app mobile

---

## 📤 PASSO 7: Workflow de Commits

### 7.1 Commits Padrão

**Ao criar novos arquivos:**
```powershell
git add .
git commit -m "Feat: Descrição da nova Feature"
git push origin main
```

**Ao atualizar arquivos:**
```powershell
git add arquivo-modificado.html
git commit -m "Update: Descrição da alteração"
git push origin main
```

**Ao limpar/remover:**
```powershell
git add .
git commit -m "Cleanup: Remover arquivos antigos"
git push origin main
```

### 7.2 Verificar Status

```powershell
git status                # Ver o que mudou
git log --oneline -5      # Ver últimos 5 commits
git branch                # Ver branch atual
```

---

## 🔍 PASSO 8: Verificações Pré-Deploy

Antes de fazer push, verifique:

### 8.1 Checklist de Arquivos

```
☐ index.html com links ao manifest.json
☐ manifest.json com todos os campos corretos
☐ service-worker.js registrado no index.html
☐ design-tokens.css com paleta de cores
☐ icons/icon-192.png (192x192px)
☐ icons/icon-512.png (512x512px)
☐ assets/ com imagens otimizadas
☐ Nenhum arquivo "v1", "v2", "old", "backup"
```

### 8.2 Testar Localmente

```powershell
# Usar Python (se tiver instalado)
python -m http.server 8000

# Ou usar Node.js
npx serve .

# Abrir: http://localhost:8000
```

### 8.3 Verificar PWA

No Chrome/Edge (Desktop):
1. F12 → Application
2. Manifest → Verifica se está válido
3. Service Workers → Verifica se registrou
4. Storage → Verifica cache

---

## 🐛 PASSO 9: Troubleshooting

| Problema | Solução |
|----------|---------|
| GitHub Pages não carrega | Verificar se é "main" branch, esperar 5min |
| Service Worker não registra | HTTPS é obrigatório, GitHub Pages gera automaticamente |
| Manifest.json inválido | Validar JSON em https://jsonlint.com |
| Icons não aparecem | Verificar caminho relativo `./ ` |
| Cache antigo persiste | Incrementar CACHE_NAME (v1 → v2 → v3) |
| Offline não funciona | Verificar ASSETS_TO_CACHE tem todos os arquivos |

---

## 📊 PASSO 10: Performance & SEO

### 10.1 Meta Tags Essenciais

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
<meta charset="UTF-8">
<meta name="description" content="Um programa devocional interativo">
<meta name="theme-color" content="#1A2238">
```

### 10.2 Otimizar Imagens

```
Máximo de tamanho por imagem:
- Icons: 50-100 KB
- Screenshots: 300-500 KB
- Videos: 20-50 MB (em assets/)
```

Use ferramentas:
- **TinyPNG:** https://tinypng.com/
- **ImageOptim:** https://imageoptim.com/
- **FFmpeg:** Para videos

---

## 🔐 SEGURANÇA

### 10.1 Proteger Arquivos Sensíveis

```
NUNCA commitar:
❌ Senhas, chaves API, tokens
❌ .env files
❌ arquivo ~/application-secrets.json
```

Use `.gitignore`:
```
# .gitignore
.env
.env.local
secrets/
*.log
node_modules/
```

---

## 📚 RECURSOS ÚTEIS

| Recurso | Link |
|---------|------|
| GitHub Docs | https://docs.github.com |
| PWA Checklist | https://web.dev/pwa-checklist/ |
| Service Workers | https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API |
| Manifest Validator | https://manifest-validator.appspot.com/ |
| GitHub Pages Help | https://pages.github.com/ |

---

## ✅ Resumo do Fluxo Completo

1. ✅ Criar pasta local: `C:\Users\santa\Downloads\além-do-devocional`
2. ✅ Adicionar arquivos: HTML, CSS, manifest.json, service-worker.js
3. ✅ Criar repositório GitHub: `alem-do-devocional`
4. ✅ Git init + push inicial
5. ✅ Ativar GitHub Pages (Settings → Pages)
6. ✅ Testar em: `https://seu-usuario.github.io/alem-do-devocional/`
7. ✅ Implementar Service Worker
8. ✅ Adicionar ícones PWA
9. ✅ Nomear commits semanticamente
10. ✅ Manter cache atualizado (v1, v2, v3...)

---

## 🎉 Pronto!

Seu PWA está pronto para:
- 📲 Instalar como app mobile
- 🔴 Funcionar offline
- ⚡ Carregar rápido (cache)
- 🌐 Ser descoberto em buscadores

**Boa sorte com o projeto! 🚀**

---

**Última atualização:** 23 de fevereiro de 2026  
**Versão:** 1.0  
**Mantido por:** GitHub Copilot
