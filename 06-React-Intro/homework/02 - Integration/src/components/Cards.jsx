import Card from './Card';

export default function Cards(props) {
   const { characters } = props;
   return (
      <div>
         {characters.map(character =>
            <Card key = {character.id}
               // id = {character.id} 
               name = {character.name}
               // status = {character.status}
               species = {character.species}
               gender = {character.gender}
               // origin = {character.origin.name}
               image = {character.image}
               onclose = {() => window.alert('Emulamos cerrar la card')}
            />)}
      </div>
   );
}
