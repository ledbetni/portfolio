import LikeButton from './like-button';
 
function Header({ title }: {title: string}) {
  return <h1>{title ? title : 'Default title'}</h1>;
}
 
export default function HomePage() {
  const categoryNames = ['Web and Mobile Applications', 'Discord Bots', 'Computer Graphics', 'High Performance Computing' ];
 
  return (
    <div>
      <Header title="Develop. Preview. Ship." />
      <ul className='projectGrid'>
        {categoryNames.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      {/*<LikeButton />*/}
    </div>
  );
}