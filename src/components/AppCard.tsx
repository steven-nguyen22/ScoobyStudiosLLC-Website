interface AppCardProps {
  name: string
  description: string
  url: string
  icon?: string
}

function AppCard({ name, description, url, icon }: AppCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="app-card"
    >
      <div className="app-card-icon">
        {icon ? (
          <img src={icon} alt={`${name} icon`} width={32} height={32} />
        ) : (
          <span>📱</span>
        )}
      </div>
      <h3>{name}</h3>
      <p>{description}</p>
      <span className="app-card-arrow">Visit website →</span>
    </a>
  )
}

export default AppCard
