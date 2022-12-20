const map = L.map("iiif-map", {
    center: [0,0],
    crs: L.CRS.Simple,
    zoom: 1,
});

const mappLayer = new L.tileLayer.iiif(
    "https://iiif.digitalcommonwealth.org/iiif/2/commonwealth:3f462s91s/info.json"
).addTo(map);

map.on('click', function(e) {
    console.log("Lat, Lon : " + e.latlng.lat + ", " + e.latlng.lng);
});



let text = document.getElementById('pageOn').textContent;
console.log(text);


function addInteraction(){
    const eventLatLng = [[-236, 279],[-411, 488], [-328, 259],[-206, 381],[-314, 320], [-298, 427],[-188, 271],
        [-272, 396],[-99, 140]]
    const eventZoom   = [0, 3, 4, 3, 3, 3, 4, 4, 2]
    const desc = [`The European colonists used surveys and maps to support colonial claims to territory in what
        is now called New England.    This map is part of a private collection and is made available 
        <a href="https://collections.leventhalmap.org/search/commonwealth:3f462s90h">in digital
        format through the Norman B. Leventhal Map Center Collection</a>.  It is the first printed map of William Reed’s
        survey of 1665.  The survey was commissioned by Massachusetts authorities to support the colonial boundaries that
        were described in the first Massachusetts Charter of 1628.  The concept of claiming and owning the land was a vastly
        different viewpoint from the indigenous communities that called the land their home.  In contrast, the land was
        viewed as something to be honored and treasured, not exploited and “owned” 
        <a href="https://native-land.ca/about/why-it-matters/"><sup>5</sup></a>.`,
        `<h3>Arrival of European Colonists</h3><p>The early 1600s was a critical time of change for New England tribes.  European borne epidemics decimated 
        Native American populations at an alarming rate, while the pressure from rapidly expanding European settlements 
        created competition for land and resources 
        <a href="https://www.ctexplored.org/breaking-the-myth-of-the-unmanaged-landscape/"><sup>1</sup></a>.</p>`,
        `<h3>Un-managed Land</h3><p>A common mis-perception that continues today is that the pre-colonial New England landscape was an 
        un-managed wilderness.  However, indigenous communities existed by using their vast ecological 
        knowledge to actively managed the land in a way that contributed to the ecosystem’s overall health and 
        biodiversity.  Indigenous communities would move from place to place depending on the time of year.  
        For example, from March through June fish would become more active and non-coastal tribes would move towards 
        the Connecticut River and Long Island Sound to take advantage of the seasonal bounty 
        <a href="https://www.ctexplored.org/breaking-the-myth-of-the-unmanaged-landscape/"><sup>1</sup></a>.</p>`,
        `<h3>Improved Land</h3><p>The colonists determined land ownership by the degree to which it had been ‘improved’.  ‘Improvements’ were 
        defined as construction of enclosures and permanent structures, privately owned planting fields and practice 
        of animal husbandry
        <a href="https://www.ctexplored.org/breaking-the-myth-of-the-unmanaged-landscape/"><sup>1</sup></a>.  
        Note how settled colonist towns are depicted with structures representing 
        town centers.</p>`,
        `<h3>Claiming Territory</h3><p><a href="https://www.flickr.com/photos/uconnlibrariesmagic/7021279265/in/photostream/lightbox/"> 
        <img src="images/PequotManuscriptMap.jpg" alt = "Manuscript Map" width = 95% target="_blank"></a>
        “Manuscript maps” created by colonist cartographers from the descriptions of Native Americans were used to 
        define territories, boundaries, and properties
        <a href="http://www.ctexplored.org/wp-content/uploads/2013/02/Early-CT-Mapmaking-Spring12.pdf"><sup>2</sup></a>. 
        For example, in 1662, the Mohegan Sachem Uncas 
        <a href="https://www.mohegan.nsn.us/about/our-tribal-history/historical-figures/sachem-uncas"><sup>4</sup></a>was asked by 
        colonial officials to help them describe the extent of the territory of the Pequot tribe that had been 
        conquered by an alliance of Englishmen, Mohegans, and Narragansetts in 1636. The linked manuscript map above, probably drawn by a 
        colonial official with input from Uncas, supported colonial claims to territory encompassing much of 
        southeastern Connecticut, which had been divided among the victors decades before but was still being argued 
        over with various parties. A little more than a century later, the colony was still arguing over Indian lands, 
        this time directly with the Mohegans. The tribe commissioned a series of maps supporting their territorial 
        claims, which they were making to a British royal commission. This “Mohegan Controversy” waxed and waned 
        through most of the 18th century, with the first decision in favor of the Mohegans and the appeals 
        (up through 1773) going in Connecticut’s favor.</p>`,
        `<h3>King Philip's War</h3><p><a href="https://www.metmuseum.org/art/collection/search/850804"> 
        <img src="images/Metacom.png" alt = "Metacom" width = 95% target="_blank"></a>
        The Native American Sachem (chief) Metacom was known to early New Englanders as King Philip.  
        Metacom began attacking and destroying English settlements after repeated broken treaties with the local tribes.  
        Colonists unrelenting desire for more and more land along with the trial and execution of three of Metacom’s 
        men by the colonists to defend the land began what is now known as King Philip’s War.  King Philip’s War has 
        been called United States’ most devastating conflict
        <a href="https://connecticuthistory.org/americas-most-devastating-conflict-king-philips-war/"><sup>3</sup></a>.</p>`,
        `<h3>Slavery</h3><p>In June, Connecticut troops repelled an attack on Hadley, Massachusetts, and Major John Talcott of Simsbury 
        and began capturing large numbers of Metacom’s followers, transporting them from New England, and 
        selling them as slaves
        <a href="https://connecticuthistory.org/americas-most-devastating-conflict-king-philips-war/"><sup>3</sup>.</p>`,
        `<h3>End of the War</h3><p>Captain Benjamin Church pursued Metacom to a hiding place in Mount Hope, Rhode Island, where he was killed 
        on August 12.  Metacom's death effectively ended the war, although clashes continued throughout New England until the Treaty of Casco was signed in 1678.  The war decimated many tribes and paved the way for additional English settlements.
        <a href="https://connecticuthistory.org/americas-most-devastating-conflict-king-philips-war/"><sup>3</sup>.</p>`,
        `This map reveals a snapshot in time of New England’s complex history and relationship between the colonists, 
        indigenous communities, and the land.  <a href = “https://collections.leventhalmap.org/exhibits/25”> 
        The Leventhal Map Center Collection online exhibition ‘America Transformed’ provides additional materials to 
        learn more about the history of land dispossession in the United States</a>.`
    ];

    document
        .getElementById("next")
        .addEventListener("click", () => {
            let text = document.getElementById('pageOn').textContent;
            if(text < eventLatLng.length){n = parseInt(text) +1}
            else{n = 1}
            // var n = parseInt(text) + 1;
            map.flyTo(eventLatLng[n - 1], eventZoom[n - 1]);
            document.getElementById('pageOn').innerHTML = n;
            document.getElementById('desc').innerHTML = desc[n - 1];

            if(n == 9){
                document.getElementById('next').innerHTML = `&#8634;`
            }
            else{
                document.getElementById('next').innerHTML = `Next &raquo;`
            }
        });
}

addInteraction();




