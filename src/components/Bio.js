import cubanLunge from '../assets/cubanlungefade.png';

const Bio = () => {
  return (
    <>
      <div className='container'>
      <h1>About</h1>
        <div className='row'>
          <div className='col-md-8 text-light'>
            <p>
              <em>Lisa Botalico</em> toured the USA as Artistic Director and
              Principal dancer of <em>La Compañia Folklorica Latina</em> under the
              auspices of the National Theatre of the Performing Arts,
              performing in: Town Hall (NYC), Constitution Hall (DC), Society of
              the Four Arts (Palm Beach), Chicago Theatre, and the Masonic
              Temple (L.A.). She has shared the stage with many flamenco greats
              including Maria Alba, Jose Molina, Manolo Rivera, Orlando Romero,
              Victorio and Carmen Salao. She performed at Symphony Space in{' '}
              <em>A Tribute to the Great Antonio</em> and with the Theatre Opera
              Music Institute at Cami Hall. She was principal dancer with Sol Y
              Sombra Spanish Dance Company, and Ballet de Puerto Rico. Lisa has
              performed at Gracie Mansion, at the Lincoln Center Craft Show, as
              guest artist with the Nassau Symphony in Long Island and in
              tablaos in NYC.{' '}
            </p>

            <p>
              <em>Lisa</em> debuted with the Alborada Spanish Dance Theatre in
              2000 as a guest artist, joining the company as principal dancer in
              2001 and then Associate Artistic Director. She has choreographed
              company dances including, <em>Verdiales, Siguiryas </em> and{' '}
              <em>l Ritmo de Las Piedras </em>A and directed and conceived{' '}
              <em> El Sueno</em>A (A Spanish Dance Ballet based on the story of the
              Nutcracker). Her critically acclaimed solo performances with the
              company include the George Street Playhouse, Crossroads Theatre,
              Union County Arts Center, Community Theatre At Mayo Center For The
              Performing Arts, Keane University, Passage Theatre, the Ocean
              County Arts Center and on NJN <em>Images/Imagines</em>, most notably
              the 2009 Emmy award winning documentary
              <em>The Spanish Guitar</em>. Lisa dances regularly in the tablao at
              Spain Inn II in Clinton, NJ.{' '}
            </p>

            <p>
              <em>Lisa</em> has been a dance instructor since 1989 and now
              teaches throughout the Princeton, NJ area. In 1999 she founded the
              children's Spanish dance program at The Arts Council of Princeton.
              Lisa currently teaches classes for adults at the Princeton Dance
              and Theatre Studio, the Arts Council of Princeton, The Dance
              Corner, Drum Dance and Learning Center, and has taught for the
              recreation departments at Princeton and Rutgers Universities. Lisa
              has given workshops and residencies throughout New Jersey,
              including: Princeton Day School, Stuart Country Day School,
              Princeton Regional Schools, and the <em>Bridge to the Arts</em>
              Summer Camp in Trenton. With Alborada, Lisa performs for Young
              Audiences of New Jersey and was a guest teacher for the State
              Theatre in New Brunswick.
            </p>
          </div>

          <div
            className='col-md-4'
            style={{ backgroundColor: 'rgb(216, 79, 79, 0.3)' }}
          >
            <img
              src={ cubanLunge }
              style={{ width: '400', height: '600' }}
              alt='Lisa Cuban'
            />

          </div>
        </div>
      </div>
    </>
  );
};
export default Bio;
