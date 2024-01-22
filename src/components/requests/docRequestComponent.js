import React, { useEffect, useState } from "react";
import PaginationWidget from "../../widgets/paginationWidget";
import { useParams } from "react-router-dom";
import { FetchAllRequests } from "../../services/requestService";
import { FetchImage } from "../../services/imageService"
import LoadingComponent from "../loadingComponent";
import moment from "moment";

const DocumentComponent = () => {
    const [request, setRequest] = useState(null);
    const [requests, setRequests] = useState(null);
    const [loading, setLoading] = useState(true);
    const { requestId } = useParams();
    const [faceImage, setFaceImage] = useState('');
    const [backImage, setBackImage] = useState('');

    const fetchRequests = async () => {
        const data = await FetchAllRequests(1, 50000);
        setRequests(data.data);
    }
    const fetchImages = async (request) => { 
        if (request !== null) {
        const backImg = await FetchImage(request["cnibackName"]);
        setBackImage(backImg);  
        const faceImg = await FetchImage(request["cnifaceName"]);
        setFaceImage(faceImg);
        }
    }
    const RequestInfo = () => {
        if (requests !== null) {
            const requestInfo = requests.find(request => request.requestOrganiserId === +requestId)
            setRequest(requestInfo);
        }
    };

    useEffect(() => {
        fetchRequests();
    }, [requestId]);

    useEffect(() => {
        RequestInfo();
        setLoading(false);
    }, [requests]);
    useEffect(() => {
        fetchImages(request)
    }, [request]);

    if (loading || request == null) {
        return <LoadingComponent />;
    }
    return (
        <div className="w-full overflow-auto sm:rounded-lg bg-white">
            
                <div className="flex flex-wrap gap-4">
                {/* {
                faceImage !== '' && (
                    <figure class="max-w-lg">
            <img class="h-auto max-w-full rounded-lg" src={faceImage} alt="image description"/>
            <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">Cni Face</figcaption>
            </figure>
                )
            } */}
            {
                faceImage !== '' && (
                    <figure class="max-w-lg">
                        <img class="h-auto max-w-lg transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0" src={faceImage} alt="image description"/>
            <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">Cni Face</figcaption>
            </figure>
                )
            }
            {
                backImage !== '' && (
                    <figure class="max-w-lg">
                        <img class="h-auto max-w-lg transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0" src={backImage} alt="image description"/>
            <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">Cni Back</figcaption>
            </figure>
                )
            }

                {
                backImage === '' ||  faceImage === '' && (
                    <figure class="max-w-lg">
                    <img class="h-auto max-w-lg transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png" alt="image description"/>
                    <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">Having an imaage problem !!!</figcaption>
                    </figure>
                )
            }
                </div>
        </div>
    );
};

export default DocumentComponent;
