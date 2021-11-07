import React, {useState , useEffect} from 'react';
import { useParams } from 'react-router';
import Footer from '../../Footer/Footer';

const ProductDetails = () => {
    const [data, setData] = useState ([]);
    const [matchedData, setMatchedData] = useState ({});
    const {productId} = useParams();
    useEffect (()=> {

fetch ('https://raw.githubusercontent.com/tushanafnan/gym-data/main/gym-data.json')
.then (res => res.json ())
.then (data => setData(data))
    }, [] )

    useEffect (()=> {
        const matched = data.find(pd=> pd.id == productId)
        setMatchedData (matched)
    }, [productId,data] )

  

    return (
        <div>
            <h3 className="text-info text-center mt-5 w-50 mx-auto bg-white">
            {matchedData?.details}
            </h3>
            <Footer></Footer>
        </div>
       
    );
};

export default ProductDetails;