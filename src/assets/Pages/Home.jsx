import {useState, useEffect} from 'react';
import MinusModal from '../Components/MinusModal';
import PlusModal from '../Components/PlusModal';

const Home = ({children}) => { // Initialize the items state with an empty array
    const [items, setItems] = useState([]);
    const [uniqueId, setUniqueId] = useState('');

    // Function to get the JSON data from local storage
    const getItemsFromLocalStorage = () => {
        const jsonData = localStorage.getItem('items');
        if (jsonData) {
            try { // Parse the JSON data from local storage
                const parsedItems = JSON.parse(jsonData);
                // Assign the parsed items to the state
                setItems(parsedItems);
            } catch (error) {
                console.error('Error parsing JSON data from local storage:', error);
            }
        } else { // If no JSON data in local storage, set items to an empty array
            setItems([]);
        }
    };

    // Load data from local storage on component mount
    useEffect(() => {
        getItemsFromLocalStorage();
    }, []);

    const deleteItem = (index) => {
        const updatedItems = items.filter((_, i) => i !== index);
        setItems(updatedItems);
        try {
            localStorage.setItem('items', JSON.stringify(updatedItems));
        } catch (error) {
            console.error('Error storing JSON data in local storage:', error);
        }
    };

    // const updateItem = () => {

    // }

    // Function to update the items state and also store it in local storage
    // const updateItems = (newItems) => {
    //     // Update the items state
    //     setItems(newItems);
    //     try {
    //         // Store the new items as JSON data in local storage
    //         localStorage.setItem('items', JSON.stringify(newItems));
    //     } catch (error) {
    //         console.error('Error storing JSON data in local storage:', error);
    //     }
    // };


    return (
        <>
        
            <div className="container-xl">
                <div className="table-responsive">
                    <div className="table-wrapper">
                        {children}
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Quantity</th>
                                    <th>Unit</th>
                                    <th>Date Created</th>
                                    <th>Action</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody> {
                                items.map((data, index) => {
                                    return <tr key={index}>
                                        <td>
                                            <b>{
                                                index + 1
                                            }</b>
                                        </td>
                                        <td>
                                            <b>{
                                                data.name
                                            }</b>
                                        </td>
                                        <td>
                                            <b>{
                                                data.quantity
                                            }</b>
                                        </td>
                                        <td>
                                            <b>{
                                                data.unit
                                            }</b>
                                        </td>
                                        <td>
                                            <b>{
                                                data.date
                                            }</b>
                                        </td>
                                        <td>
                                            <a href='#'
                                                onClick={
                                                    e => {
                                                        e.preventDefault()
                                                        setUniqueId(index + 1)
                                                    }
                                                }
                                                data-bs-toggle="modal"
                                                data-bs-target="#minusModal"
                                                className="minus mx-1"
                                                title=""
                                                data-toggle="tooltip"
                                                data-original-title="Minus">
                                                <i className="material-icons">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/>
                                                    </svg>
                                                </i>
                                            </a>
                                            {<MinusModal uniqueId={uniqueId} updateItems={setItems} />}
                                            <a href='#'
                                                onClick={
                                                    e => e.preventDefault()
                                                }
                                                data-bs-toggle="modal"
                                                data-bs-target="#plusModal"
                                                className="plus mx-1"
                                                title=""
                                                data-toggle="tooltip"
                                                data-original-title="Plus">
                                                <i className="material-icons">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
                                                    </svg>
                                                </i>
                                            </a>
                                            {<PlusModal uniqueId={uniqueId} updateItems={setItems} />}
                                        </td>
                                        <td className='text-center'>
                                            <a href="#"
                                                onClick={
                                                    e => {
                                                        e.preventDefault()
                                                        deleteItem(index)
                                                    }
                                                }
                                                className="delete text-danger"
                                                title=""
                                                data-toggle="tooltip"
                                                data-original-title="Delete">
                                                <i className="material-icons"></i>
                                            </a>
                                        </td>
                                    </tr>
                            })
                            } </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;
