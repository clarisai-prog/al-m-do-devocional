## 🌟 CoverScreenEspiritual

Página inicial estilo "Ambiente Espiritual" com design elegante, animações suaves e **100% acessibilidade**.

---

## ✨ Features

### 🎨 Design
- ✅ Tema escuro elegante (gradientes azul/roxo/preto)
- ✅ Efeito bokeh com partículas douradas flutuantes
- ✅ Animações fade-in escalonadas
- ✅ Símbolo decorativo V com halo de luz
- ✅ Tipografia minimalista e moderna

### ♿ Acessibilidade
- ✅ `aria-label` em todos os botões
- ✅ `focus-visible:ring-2` para navegação por teclado
- ✅ Min 48x48px touch targets
- ✅ Contraste WCAG AAA
- ✅ `aria-hidden` em elementos decorativos
- ✅ Texto responsivo (rem/em)

### 🎯 Interatividade
- ✅ Botão principal "Iniciar Tutorial" com animação ao hover
- ✅ Botões secundários "Checklist" e "Wallpapers"
- ✅ Feedback visual (`active:scale-95`)
- ✅ Resposta rápida ao toque

---

## 📋 Props

```typescript
interface CoverScreenEspiritualProps {
  onStart: () => void;           // Callback ao clicar "Iniciar"
  onChecklist?: () => void;      // Callback ao clicar "Checklist"
  onWallpapers?: () => void;     // Callback ao clicar "Wallpapers"
  titulo?: string;               // Título principal (padrão: "Ambiente Espiritual")
  subtitulo?: string;            // Subtítulo em itálico
  descricao?: string;            // Descrição/parágrafo
}
```

---

## 🚀 Como Usar

### Uso Básico (com textos padrão)
```tsx
import CoverScreenEspiritual from '@/src/CoverScreenEspiritual';

export default function App() {
  const handleStart = () => {
    console.log('Iniciar programa!');
  };

  return (
    <CoverScreenEspiritual 
      onStart={handleStart}
      onChecklist={() => console.log('Abrir checklist')}
      onWallpapers={() => console.log('Baixar wallpapers')}
    />
  );
}
```

### Uso com Textos Customizados
```tsx
<CoverScreenEspiritual 
  onStart={handleStart}
  titulo="Meu Programa Devotional"
  subtitulo="Transforme Sua Vida Espiritual"
  descricao="Um programa de 21 dias para aprofundar sua fé..."
/>
```

### Integração com App.tsx (multi-tela)
```tsx
const [screen, setScreen] = useState<'cover' | 'lesson' | 'completion'>('cover');

return (
  <>
    {screen === 'cover' && (
      <CoverScreenEspiritual 
        onStart={() => setScreen('lesson')}
      />
    )}
    {screen === 'lesson' && (
      <LessonScreen onFinish={() => setScreen('completion')} />
    )}
    {screen === 'completion' && (
      <CompletionScreen onRestart={() => setScreen('cover')} />
    )}
  </>
);
```

---

## 🎨 Animar Partículas

As partículas flutuantes são geradas dinamicamente. Para customizar:

```tsx
// Aumentar quantidade de partículas
{[...Array(40)].map((_, i) => (  // De 20 para 40
  // ...
))}

// Mudar duração da animação
animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
// Para mais rápido: `float ${2 + Math.random() * 2}s...`
```

---

## ⌨️ Navegação

| Ação | Como |
|------|------|
| Iniciar | Clique em "Iniciar Tutorial" |
| Checklist | Clique em "Checklist" |
| Wallpapers | Clique em "Wallpapers" |
| Foco por teclado | Tab para navegar, Enter para ativar |

---

## 🧪 Testes

### Teste 1: Desktop
```
1. Abra a página
2. Veja animações fade-in nas seções
3. Partículas flutuam suavemente
4. Hover no botão principal expande cor
```

### Teste 2: Mobile
```
1. Abra em smartphone
2. Botões têm espaço suficiente (48x48px)
3. Tap responde imediatamente
4. Layout responsivo em telas pequenas
```

### Teste 3: Keyboard
```
1. Pressione Tab
2. Foco aparece com ring dourado
3. Pressione Enter/Space para ativar
```

### Teste 4: Screen Reader
```
1. VoiceOver/TalkBack ativo
2. Mensagens descritivas para cada botão
3. Elementos decorativos ignorados
```

---

## 🎯 Customização de Cores

Para mudar as cores (pelo Tailwind):

```tsx
// Background gradiente
className="bg-gradient-to-b from-[#2a2a4a] via-[#1f1b2a] to-[#0f0f1a]"

// Bokeh (efeitos de luz)
className="bg-gold/5" // Aumentar opacidade para mais brilho

// Botões e textos
className="text-gold" // Ajuste em tailwind.config.ts

// Bordas
className="border-gold/40" // Aumentar para mais visível
```

---

## 📊 Estrutura de Componente

```
CoverScreenEspiritual
├── Background com gradiente
├── Efeito de partículas (20 elementos flutuantes)
├── Conteúdo principal
│   ├── Símbolo V decorativo
│   ├── Label "GUIA DE ESTUDO"
│   ├── Título
│   ├── Subtítulo
│   └── Descrição
└── Botões
    ├── Botão principal (Iniciar)
    └── Botões secundários (Checklist, Wallpapers)
```

---

## ✅ Conformidade

| Aspecto | Status |
|---------|--------|
| Contraste | ✅ WCAG AAA |
| Touch targets | ✅ 48x48px min |
| Keyboard nav | ✅ Completo |
| Screen reader | ✅ aria-labels |
| Responsividade | ✅ Mobile/Tablet/Desktop |
| TypeScript | ✅ Completo |
| Performance | ✅ CSS animations |

---

## 🎬 Animações Incluídas

1. **fade-in** - Seções aparecem suavemente (0.8s)
2. **float** - Partículas flutuam (3-7s)
3. **pulse** - Bokeh pisca sutilmente
4. **scale** - Botões reagem ao clique (active:scale-95)
5. **hover** - Mudança de cor ao hover

---

## 💡 Dicas

- Use `onStart` como main call-to-action
- `onChecklist` e `onWallpapers` são opcionais
- Customize textos para seu conteúdo
- Cores seguem tema do projeto (#1a160d, #cfaa6c)
- Pronto para PWA e offline-first

---

## 🚀 Status: Production Ready ✅

Componente completo, testado e pronto para deploy em produção.
