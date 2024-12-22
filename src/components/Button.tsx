
const Button = ({ onClick, title, variant }: { onClick: () => void, title: string, variant?: string}) => {
  return (
    <button onClick={onClick} className={`${variant} bg-secondary-gray text-white px-4 py-2 rounded-md font-medium`}>{title}</button>
  )
}

export default Button
