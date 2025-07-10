# AI Interior Design Studio

An AI-powered web application that transforms photos of real rooms into various interior design styles. Users can upload images, apply styles like Modern, Scandinavian, Industrial, and more, then save, compare, and share their styled rooms — all in a sleek, mobile-friendly interface.

## ✨ Features

- 📸 **Photo Upload** – Upload or capture a room photo
- 🎨 **Style Selection** – Choose from multiple design styles
- 🧠 **AI-Powered Styling** – Generate styled versions of your room using AI
- 💾 **Gallery** – Save and organize your styled images
- 🆚 **Side-by-Side Comparison** – Compare multiple styles visually
- 📤 **Share Styled Rooms** – Download or share your designs with others

## 🖌️ Design Language

- **Look & Feel:** Luxurious, minimalist, premium
- **Color Palette:**
  - `#1a1a1a` Deep Charcoal (background)
  - `#ffffff` Pure White (text/background)
  - `#d4af37` Warm Gold (accents)
- **Typography:** Clean and modern
- **UX:** Smooth transitions, mobile-first responsive design

## 📁 Project Structure

```
/components
├── PhotoUpload
├── StyleSelector
├── GenerationProgress
├── StyledResult
├── GalleryGrid
├── ImageModal
├── CompareGrid
└── RoomSelector

/pages
├── upload
├── gallery
└── compare

/entities
└── StyledRoom.ts
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- API access to an AI image generation model (e.g. OpenAI, Stability, etc.)

### Installation

```bash
git clone https://github.com/yourusername/ai-interior-design-studio.git
cd ai-interior-design-studio
npm install
```
# or
yarn install

## Run Development Server

npm run dev
# or
yarn dev

- Open http://localhost:3000 to view it in your browser.

## 🧠 AI Integration
The AI component takes a room image and a selected design style as input, then generates a styled version of the room. Make sure to configure your preferred image generation API in the backend.

## 📸 Example Styles

- Modern
- Scandinavian
- Industrial
- Bohemian
- Minimalist
- Japandi

## 🛠️ Tech Stack

- React (with Next.js or Vite)
- Tailwind CSS
- Node.js
- AI Image API (OpenAI / Stable Diffusion / Replicate)
- Cloud Storage (e.g. Firebase, S3)

## 📄 License

This project is licensed under the MIT License.

Created with ❤️ by Base44
























