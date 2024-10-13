import React, { useState, FormEvent} from 'react';



interface FormData {
    book_title: string;
    author_name: string;
    genre: string;
    queer_inclusion: string;
};

const CreateListing : React.FC<FormData> () => { 
    const [listingData, setListingData] = useState<FormData>();

    const handleChange = (event: React.ChangeEvent<FormData>) => {
        const {name, value } = event.target;
        setListingData({ ...listingData, [name] : value });
    };
        //axios.post('', FormData)
        // .then(res => {
        // console.log(res)
        // })
        // .catch(err => {
        // console.log(err)
        // })
    };
   
    
    return (
    <div className='createListingDiv'>
        <h1 className='createListingHeader'>Create A Book Listing</h1>
        <form className='createListingForm' onSubmit={handleSubmit}>
            <label className='createListingLabel'>Book Title</label>
            <input
                className='createListingInput'
                type='text'
                name='Book Title'
                value={listingData.book_title}
                onChange={handleChange}
            />
            <label className='createListingLabel'>Author Name</label>
            <input
                className='createListingInput'
                type='text'
                name='Author Name'
                value={listingData.author_name}
                onChange={handleChange}
            />
            <label className='createListingLabel'>Genre</label>
            <input
                className='createListingInput'
                type='text'
                name='Genre'
                value={listingData.genre}
                onChange={handleChange}
            />
            <label className='createListingLabel'>Queer Inclusion</label>
            <input
                className='createListingInput'
                type='text'
                name='Queer Inclusion'
                value={listingData.queer_inclusion}
                onChange={handleChange}
            />
        </form>
    </div>
    )
    

};

export default CreateListing