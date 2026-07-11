export default function Footer() {
  return (
    <footer className="border-t border-(--color-border) py-10 text-center text-xs text-(--color-muted)">
      <div className="container-px">
        Made by Abdalkarim Kehail · © {new Date().getFullYear()}
      </div>
    </footer>
  )
}
