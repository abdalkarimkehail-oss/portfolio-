export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 text-center text-xs text-(--color-muted)">
      <div className="container-px">
        Made by Omar Alrayyan · © {new Date().getFullYear()}
      </div>
    </footer>
  )
}
