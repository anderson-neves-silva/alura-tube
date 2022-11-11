import React from "react";
import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

function HomePage() {
  const estiloDaHome = {
    // backgroundColor: "red" 
  };

  const [valorDoFiltro, setValorDoFiltro] = React.useState("");

  // console.log(config.playlists);

  return (
    <>
      <CSSReset />
      <div style={estiloDaHome}>
        {/* chamando os componentes */}
        {/* linha 24 conhecida como Prap Drilling */}
        <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
        <Header />
        <Timeline searchValue={valorDoFiltro} playlists={config.playlists}>
          Conteúdo
        </Timeline>
      </div>
    </>
  );
}

export default HomePage

// criando o componente Menu
// function Menu() {
//     return (
//         <div>
//             Menu
//         </div>
//     );
// }

// componente que estiliza o Header
const StyledHeader = styled.div`
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }

    .user-info {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
`;

// componente que estiliza o Banner
const StyledBanner = styled.div`
  /* background-image: url(${config.bg}); */
  background-image: url(${({ bg }) => bg});
  height: 230px;
`;

// criando o componente Header
function Header() {
  return (
    <StyledHeader>
      <StyledBanner bg={config.bg} />
      <section className="user-info">
        <img src={`${config.github}`} />
        <div>
          <h2>
            {config.name}
          </h2>
          <p>
            {config.job}
          </p>
        </div>
      </section>
    </StyledHeader>
  );
}

// criando o componente Timeline
function Timeline({searchValue, ...props}) {
  // console.log("Dentro do componente", props.playlists);
  const playlistNames = Object.keys(props.playlists);
  // Statement
  // Retorno por expressão
  return (
    <StyledTimeline>      
      {playlistNames.map((playlistName) => {
        const videos = props.playlists[playlistName];
        // console.log(playlistName);
        // console.log(videos);
        return (
          <section key={playlistName}>
            <h2>{playlistName}</h2>
            <div>
              {videos
              .filter((video) => {
                const titleNormalized = video.title.toLowerCase();
                const searchValueNormalized = searchValue.toLowerCase();
                return titleNormalized.includes(searchValueNormalized)
              })
              .map((video) => {
                return (
                  <a key={video.url} href={video.url}>
                    <img src={video.thumb} />
                    <span>
                      {video.title}
                    </span>
                  </a>
                )
              })}
            </div>
          </section>
        )
      })}
    </StyledTimeline>
  );
}
