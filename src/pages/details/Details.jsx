import React from 'react';
import './styles.scss'
import DetailsBanner from './detailsBanner/DetailsBanner';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import Cast from './cast/Cast';
import VideosSection from './vediosSection/VediosSection';
import Similar from './carousel/Similar';
import Recommendation from './carousel/Reccommendation';
const Details = () => {
    const { mediaType, id } = useParams();
    const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
    const { data: credits, loading: creditsLoading } = useFetch(
        `/${mediaType}/${id}/credits`
    );


    return (
        <div>
            <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
            <Cast data={credits?.cast} loading={creditsLoading} />
            <VideosSection data={data} loading={loading} />
            <Similar mediaType={mediaType} id={id}></Similar>
            <Recommendation mediaType={mediaType} id={id}></Recommendation>
        </div>
    );
};

export default Details;