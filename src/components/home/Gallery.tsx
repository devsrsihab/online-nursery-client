import SectionTitle from "../shared/SectionTitle";

const Gallery = () => {
  return (
    <div className="py-24">
      <SectionTitle
        firstText="Unveil "
        highlightText="Greenery "
        lastText="in Your Space"
        detailsText="Discover a curated selection of vibrant trees that bring natural beauty and serenity to your surroundings"
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://i.ibb.co/rQ4sSrr/Myers-Fern-Asparagus-1-copy-340x453.webp"
              alt="Myers Fern Asparagus"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://i.ibb.co/Qn9fCdQ/thuja-excelsa-1-474x632.webp"
              alt="Thuja Excelsa"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://i.ibb.co/dkTY9b0/Bellini-Raspberry-Crape-Myrtle-1-copy-340x453.webp"
              alt="Bellini Raspberry Crape Myrtle"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://i.ibb.co/W6TxFtM/Gold-Tide-Forsythia-1-340x453.webp"
              alt="Gold Tide Forsythia"
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://i.ibb.co/xzzC4s3/Dense-Spreading-Yew-1-340x453.png"
              alt="Dense Spreading Yew"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://i.ibb.co/mvWL73v/Sea-Green-Juniper-4-copy-680x906.webp"
              alt="Sea Green Juniper"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://i.ibb.co/r6K2V2v/pineapple-pear-tree-1-340x453.png"
              alt="Pineapple Pear Tree"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://i.ibb.co/4MsjsHf/spilled-wine-weigela-1-340x453.png"
              alt="Spilled Wine Weigela"
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://i.ibb.co/TgnJ1b1/Dark-Green-Spreader-Yew-1-copy-340x453.webp"
                alt="Dark Green Spreader Yew"
              />
            </div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://i.ibb.co/kQs80Lq/Messina-Peach-1-copy-340x453.webp"
              alt="Messina Peach"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://i.ibb.co/4wyqbgt/Ayers-Pear-Tree-1-340x453.webp"
              alt="Ayers Pear Tree"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://i.ibb.co/bv0012x/Dwarf-Garden-Juniper-1-copy-340x453.webp"
              alt="Dwarf Garden Juniper"
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://i.ibb.co/J7ptsyk/Triple-Crown-Blackberry-1-copy-340x453.webp"
              alt="Triple Crown Blackberry"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://i.ibb.co/NYdsgDz/Flavorich-Peach-1-copy-340x453.webp"
              alt="Flavorich Peach"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://i.ibb.co/2MLG5rm/Coastal-Leucothoe-1-copy-340x453.webp"
              alt="Coastal Leucothoe"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://i.ibb.co/1m0j0N8/Columbia-Star-Blackberry-1-copy-340x453.webp"
              alt="Columbia Star Blackberry"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
