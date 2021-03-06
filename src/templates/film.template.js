import React from 'react';
import LayoutComponent from '../components/layout.component';
import SeoComponent from '../components/seo.component';
import { graphql } from 'gatsby';
import FilmComponent from '../components/film.component';

export const query = graphql`
    query($id: String!) {
        contentfulFilm(vimeoId: { eq: $id }) {
            id
            title
            description {
                description
            }
            date
            vimeoId
            image {
                file {
                    url
                }
            }
        }
    }
`;

const FilmTemplate = ({ data: { contentfulFilm: video }, pageContext }) => (
    <LayoutComponent>
        <SeoComponent
            title={video.title}
            description={video.description.description}
            image={video.image.file.url}
        />
        <FilmComponent
            video={video}
            onNext={pageContext.next}
            onPrevious={pageContext.previous}
        />
    </LayoutComponent>
);

export default FilmTemplate;
