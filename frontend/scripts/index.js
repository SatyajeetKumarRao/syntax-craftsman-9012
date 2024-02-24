import { createFooter } from '../components/footer.js'

// Generate footer element
const footer = createFooter();

// Append footer to the body of the document
document.body.appendChild(footer);

store_offer_create();

function store_offer_create() {

    let store_offer_array = ['https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_250923_01.png?tr=w-1920,q=80',
        'https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_250923_02.png?tr=w-1920,q=80',
        'https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_250923_03.png?tr=w-1920,q=80',
        'https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_250923_04.png?tr=w-1920,q=80',
        'https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_250923_05.png?tr=w-1920,q=80',
        'https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_250923_06.png?tr=w-1920,q=80'];

    store_offer_array = store_offer_array.slice(0, 6);

    let store_offer = document.getElementById('store_offer');

    store_offer_array.map(item => {

        let a = document.createElement('a');
        a.href = '#';

        let img = document.createElement('img');
        img.src = item;
        img.alt = '#';
        img.loading = 'lazy';

        a.append(img);
        store_offer.append(a);
    });

};

bank_offer_create();

function bank_offer_create() {

    let bank_offer_array = ['https://i.ibb.co/N2SjFmB/bank1.webp',
        'https://i.ibb.co/TWCFrQs/bank2.webp',
        'https://i.ibb.co/2yfN9ST/bank3.webp',
        'https://i.ibb.co/J77X4yg/bank4.webp'];

    let bank_offer_img_container = document.getElementById('bank_offer_img_container');

    bank_offer_array.map(item => {

        let a = document.createElement('a');
        a.href = '#';

        let img = document.createElement('img');
        img.src = item;
        img.alt = '#';
        img.loading = 'lazy';

        a.append(img);
        bank_offer_img_container.append(a);
    });
};


top_offer_create();

function top_offer_create() {

    let top_offer_array = ['https://i.ibb.co/2tn3g4w/top1.webp',
        'https://i.ibb.co/zQwpnmn/top2.webp',
        'https://i.ibb.co/r0jy3nc/top3.webp',
        'https://i.ibb.co/cwSShj8/top4.webp'];

    let top_offer_img_container = document.getElementById('top_offer_img_container');

    top_offer_array.map(item => {

        let a = document.createElement('a');
        a.href = '#';

        let img = document.createElement('img');
        img.src = item;
        img.alt = '#';
        img.loading = 'lazy';

        a.append(img);
        top_offer_img_container.append(a);
    });
};












