import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";

function HomePage() {
    const estiloDaHome = { 
        // backgroundColor: "red" 
    };

    // console.log(config.playlists);

    return (
        <>
            <CSSReset />
            <div style={estiloDaHome}>
                {/* chamando os componentes */}
                <Menu />
                <Header />
                <Timeline playlists={config.playlists} />
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

// criando o componente Header
function Header() {
    return (
        <StyledHeader>
            {/* <img src="banner" /> */}

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
function Timeline(props) {
    // console.log("Dentro do componente", props.playlists);
    const playlistNames = Object.keys(props.playlists);
    // Statement
    // Retorno por expressão
    return (
        <StyledTimeline>
            {playlistNames.map((playlistName) => {
                const videos = props.playlists[playlistName];
                console.log(playlistName);
                console.log(videos);
                return (
                    <section>
                        <h2>{playlistName}</h2>
                        <div>
                            {videos.map((video) => {
                                return (
                                    <a href={video.url}>
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
