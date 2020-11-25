import {
  Crewcards,
  Crewheader,
  Astrophoto,
  Crewsection,
  Astrotitle,
  Astroname,
  Astroflag,
  Astrotag,
  P,
  Trait,
  Learnmore,
} from "./AstroCSS";

export default function Astro({
  name,
  departure,
  arrival,
  description,
  profile_image,
  wiki,
  nationality,
  onboard,
  flag_image,
  spaceship,
}) {
  return (
    <Crewcards>
      <Crewheader>
        <Astrophoto src={profile_image} alt={name} />
      </Crewheader>
      <Crewsection>
        <Astrotitle>
          <Astroname>{name}</Astroname>
          <Astroflag src={flag_image} alt={nationality} />
        </Astrotitle>
        <Astrotag>
          <P>
            <u>Nationality</u>: {nationality}
          </P>
          <P>
            <u>Date of arrival</u>: {arrival}
          </P>
          <P>
            <u>Date of departure</u>: {departure}
          </P>
          <P>
            <u>Arrived by</u>: {spaceship}
          </P>
          <P>
            <u>Who is it </u>? {description}
          </P>
        </Astrotag>
        <Trait></Trait>
        <Learnmore href={wiki}>Learn more ...</Learnmore>
      </Crewsection>
    </Crewcards>
  );
}
