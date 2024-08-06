interface IconProps {
  className: string;
}

const Icon: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      className={`${className} fill-text`}
      xmlns="http://www.w3.org/2000/svg"
      width="800"
      height="800"
      version="1.1"
      viewBox="0 0 25.531 25.531"
      xmlSpace="preserve"
    >
      <path d="M25.198 6.273c-.014.23-.045.389-.087.467-.045.084-.176.145-.392.183-.469.104-.781-.074-.935-.533-.545-1.69-1.194-2.812-1.944-3.374-1.041-.773-2.862-1.161-5.469-1.161-1.054 0-1.633.115-1.734.343a.768.768 0 00-.057.324v18.999c0 .812.188 1.383.571 1.709.382.32 1.069.731 2.201.999.483.103.97.2 1.034.239.46 0 .504 1.057-.376 1.057-.025.016-10.375-.008-10.375-.008s-.723-.439-.074-1.023l.767-.343s1.83-.614 2.211-1.009c.434-.445.648-1.164.648-2.154V2.521c0-.369-.229-.585-.687-.647-.049-.015-.425-.02-1.122-.02-2.415 0-4.191.418-5.338 1.259-.864.622-1.629 1.764-2.303 3.432-.217.52-.517.689-.897.513-.432-.101-.589-.339-.477-.705.445-1.374.668-3.31.668-5.814 0-.292.387-.586 1.163-.533L23.56.064c.709-.104 1.096.012 1.16.343.356 1.689.514 3.645.478 5.866z"></path>
    </svg>
  );
};

export default Icon;