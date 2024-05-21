import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { useState, useEffect  } from 'react';
import ProductCard from '../components/ProductCard';
import { Products } from '../data/Products';
import { Categories } from '../data/Categories';
import { useParams , Link } from 'react-router-dom';

export default function OurStore() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });



    const [categorie, setcategorie] = useState(null);
    const { category } = useParams();

    useEffect(() => {
        if (category) {
            setcategorie(category);
        } else {
            setcategorie(null);
        }
    }, [category]);

    const [priceFrom, setPriceFrom] = useState();
    const [priceTo, setPriceTo] = useState();
    return (
        <>
            <Meta title={"Clubs"} />
            <BreadCrumb title="Clubs" />
            <div className="store-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3">
                            <div className="filter-card mb-3">
                                <h3 className="filter-title">
                                    Shop By Categories
                                    <div>
                                        <ul>
                                            <li onClick={() => setcategorie(null)}>All Products</li>
                                            {
                                                Categories.map(
                                                    (categorie => (
                                                        <li onClick={() => setcategorie(categorie.title)}>{categorie.title.replace(/_/g, " ")}
                                                        </li>
                                                    ))
                                                )
                                            }
                                        </ul>
                                    </div>
                                </h3>
                            </div>
                            <div className="filter-card mb-3">
                                <h3 className="filter-title">
                                    Filter By
                                </h3>
                                <h5 className="sub-title py-1">Price</h5>
                                <div className="d-flex align-items-center">
                                    <div className=" m-1">
                                        <input type="number" className="form-control" placeholder="From" onChange={(e)=> setPriceFrom(e.target.value)}/>
                                    </div>
                                    <div className="m-1">
                                        <input type="number" className="form-control" placeholder="To" onChange={(e)=>setPriceTo(e.target.value)}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-9">
                            <div className="filter-sort-grid mb-4">
                                <div className="d-flex align-items-center justify-content-end gap-10">
                                    <p className="totalproducts mb-0">{Products.length} Products</p>
                                </div>
                            </div>
                            <div className="products-list d-flex flex-wrap pb-5">
                                <ProductCard  categorie={categorie} priceFrom={priceFrom}  priceTo={priceTo}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
