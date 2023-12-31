import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Hotel, HotelDocument } from '../hotels/schemas/hotels.schema'; // Update with your schema path

@Injectable()
export class SeederService {
  constructor(
    @InjectModel(Hotel.name) private hotelModel: Model<HotelDocument>,
  ) {}

  async seedDatabase(): Promise<void> {
    try {
      const hotels = [
        {
          name: 'Aarhus',
          region: 'Jutland',
          description: 'City, Design and Culture',
          location: 'Aarhus',
          hotelImage:
            'https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/hoteller/caa/udefra/comwell-aarhus-bygning.jpg/c4677c907569793b5e2e89ef52b55da4.webp',
          hotelAddress: 'Værkmestergade',
          hotelPostcode: 8000,
          hotelCity: 'Aarhus',
          hotelCountry: 'Denmark',
          rooms: [
            {
              type: 'Single Room',
              description:
                "Comwell Hotels' single rooms are thoughtfully designed havens crafted to cater to the needs of solo travelers. These rooms feature contemporary decor, ensuring a harmonious blend of comfort and functionality. Equipped with modern amenities, a comfortable bed, and a stylish interior, our single rooms provide a welcoming retreat for guests traveling alone. Whether it's for business or leisure, these rooms offer a peaceful environment to unwind and enjoy a restful stay at Comwell Hotels.",
              availability: 36,
              facilities: [
                'Double bed',
                'TV',
                'Workspace',
                'Safety deposit box',
                'Hair dryer',
                'Bathroom with shower',
                'Bodylotion & Balsam',
                'Coffee maker',
              ],
              price: 1099,
              roomImage:
                'https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/hoteller/ckp/vaerelser/comwell-kellers-park-standard-vaerelse-1680266637.jpg/6ee4a9d799e044122b283cd31ac7415e.webp',
              roomImage2:
                'https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/hoteller/cbo/vaerelser/comwell-borupgaard-standard-room-02.jpg/08888c52eedc223bcdb901b2d99b651d.webp',
              size: 24,
            },
            {
              type: 'Double Room',
              description:
                "Comwell Hotels' double rooms provide a cozy and inviting space for guests seeking shared accommodation. Elegantly designed with a modern touch, these rooms offer comfort and convenience for couples or friends traveling together. The well-appointed double beds, combined with contemporary furnishings, create a warm and relaxing atmosphere. With amenities designed to enhance the overall guest experience, our double rooms provide a comfortable retreat for those looking to enjoy a memorable stay at Comwell Hotels.",
              availability: 12,
              facilities: [
                'Twin bed',
                'TV',
                'Free Wifi',
                'Coffee and tee maker',
                'Workspace',
                'Balcony',
                'Lounge chair',
                'Iron & ironing board',
                'Safety deposit box',
                'Hair dryer',
                'Bodylotion & Balsam',
              ],
              price: 1499,
              roomImage:
                'https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/hoteller/ckp/vaerelser/comwell-kellers-park-superior-vaerelse-1680266772.jpg/852c84e2eb0ad5eaa15f808d818bbfa4.webp',
              roomImage2:
                'https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/hoteller/cbo/vaerelser/comwell-borupgaard-sdbo-02.jpg/a1abdb92433223b197a8092aad381540.webp',
              size: 30,
            },
            {
              type: 'Suite',
              description:
                "Comwell Hotels' suites redefine luxury, offering an exclusive and indulgent experience for discerning guests. These spacious accommodations feature a harmonious blend of sophistication and comfort, providing a private sanctuary for relaxation. The suites boast elegant interiors, premium furnishings, and thoughtfully curated amenities. Whether you're on a romantic getaway or a business trip, our suites cater to your every need, ensuring a memorable stay. Enjoy personalized service, stunning views, and an ambiance of refined opulence in Comwell Hotels' exquisite suites.",
              availability: 6,
              facilities: [
                'King size bed',
                'Kitchen',
                'Two additional rooms',
                'TV',
                'Free Wifi',
                'Coffee and tee maker',
                'Workspace',
                'Balcony',
                'Lounge chair',
                'Iron & ironing board',
                'Safety deposit box',
                'Hair dryer',
                'Bodylotion & Balsam',
              ],
              price: 2499,
              roomImage:
                'https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/hoteller/cal/vaerelser/comwell-aalborg-suite.jpg/6de7714610ce07f2afdd523b7f85c9a2.webp',
              roomImage2:
                'https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/hoteller/cbo/vaerelser/comwell-borupgaard-subo-02.jpg/1992cf048d82fa55bded365e9e5b1e12.webp',
              size: 66,
            },
          ],
          welcome:
            "Comwell Aarhus welcomes you to a world of design, quality and well-being with the city's best view of the harbour, forest and beach. A hotel stay in Aarhus welcomes you with endless possibilities for entertainment and unique experiences.\n\nThe hotel is located at one of the city's most central addresses close to the centrum and the station.",
        },
        {
          name: 'Bygholm Park',
          region: 'Jutland',
          location: 'Horsens',
          hotelImage:
            'https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/hoteller/cbp/comwell_bygholm_park_front.jpg/a6fbffaf794d23b2abb8755926486ef1.webp',
          hotelAddress: 'Schüttesvej 6',
          hotelPostcode: 8600,
          hotelCity: 'Horsens',
          hotelCountry: 'Denmark',
          rooms: [
            {
              type: 'Single Room',
              description:
                "Comwell Hotels' single rooms are thoughtfully designed havens crafted to cater to the needs of solo travelers. These rooms feature contemporary decor, ensuring a harmonious blend of comfort and functionality. Equipped with modern amenities, a comfortable bed, and a stylish interior, our single rooms provide a welcoming retreat for guests traveling alone. Whether it's for business or leisure, these rooms offer a peaceful environment to unwind and enjoy a restful stay at Comwell Hotels.",
              availability: 36,
              facilities: [
                'Double bed',
                'TV',
                'Workspace',
                'Safety deposit box',
                'Hair dryer',
                'Bathroom with shower',
                'Bodylotion & Balsam',
                'Coffee maker',
              ],
              price: 1099,
              roomImage:
                'https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/hoteller/ckp/vaerelser/comwell-kellers-park-standard-vaerelse-1680266637.jpg/6ee4a9d799e044122b283cd31ac7415e.webp',
              roomImage2:
                'https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/hoteller/cbo/vaerelser/comwell-borupgaard-standard-room-02.jpg/08888c52eedc223bcdb901b2d99b651d.webp',
              size: 24,
            },
            {
              type: 'Double Room',
              description:
                "Comwell Hotels' double rooms provide a cozy and inviting space for guests seeking shared accommodation. Elegantly designed with a modern touch, these rooms offer comfort and convenience for couples or friends traveling together. The well-appointed double beds, combined with contemporary furnishings, create a warm and relaxing atmosphere. With amenities designed to enhance the overall guest experience, our double rooms provide a comfortable retreat for those looking to enjoy a memorable stay at Comwell Hotels.",
              availability: 12,
              facilities: [
                'Twin bed',
                'TV',
                'Free Wifi',
                'Coffee and tee maker',
                'Workspace',
                'Balcony',
                'Lounge chair',
                'Iron & ironing board',
                'Safety deposit box',
                'Hair dryer',
                'Bodylotion & Balsam',
              ],
              price: 1499,
              roomImage:
                'https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/hoteller/ckp/vaerelser/comwell-kellers-park-superior-vaerelse-1680266772.jpg/852c84e2eb0ad5eaa15f808d818bbfa4.webp',
              roomImage2:
                'https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/hoteller/cbo/vaerelser/comwell-borupgaard-sdbo-02.jpg/a1abdb92433223b197a8092aad381540.webp',
              size: 30,
            },
            {
              type: 'Suite',
              description:
                "Comwell Hotels' suites redefine luxury, offering an exclusive and indulgent experience for discerning guests. These spacious accommodations feature a harmonious blend of sophistication and comfort, providing a private sanctuary for relaxation. The suites boast elegant interiors, premium furnishings, and thoughtfully curated amenities. Whether you're on a romantic getaway or a business trip, our suites cater to your every need, ensuring a memorable stay. Enjoy personalized service, stunning views, and an ambiance of refined opulence in Comwell Hotels' exquisite suites.",
              availability: 6,
              facilities: [
                'King size bed',
                'Kitchen',
                'Two additional rooms',
                'TV',
                'Free Wifi',
                'Coffee and tee maker',
                'Workspace',
                'Balcony',
                'Lounge chair',
                'Iron & ironing board',
                'Safety deposit box',
                'Hair dryer',
                'Bodylotion & Balsam',
              ],
              price: 2499,
              roomImage:
                'https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/hoteller/cal/vaerelser/comwell-aalborg-suite.jpg/6de7714610ce07f2afdd523b7f85c9a2.webp',
              roomImage2:
                'https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/hoteller/cbo/vaerelser/comwell-borupgaard-subo-02.jpg/1992cf048d82fa55bded365e9e5b1e12.webp',
              size: 66,
            },
          ],
          description: 'Historic atmosphere in beautiful nature',
          welcome:
            'Step inside the beautiful old manor house and discover a very special hotel that has belonged to Danish royalty and been frequented by noble families and landowners.\n\nWhether you’re looking for the perfect setting for one of life’s big celebrations, your next meeting or conference, or for an overnight stay, Comwell Bygholm Park is the obvious choice. We are located in the heart of Horsens’ delightful Bygholm Park, which means everything you need is close by: Horsens city centre, public transport and the motorway.\n\nComwell Hotels took over Bygholm Park on 1 January 2023.',
        },
        {
          name: 'Borupgaard',
          region: 'Zealand',
          description: 'Taste experiences, nature and spa',
          location: 'Snekkersten',
          hotelImage:
            'https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/hoteller/cbo/udendoers/comwell-borupgaard-ude-03.jpg/ee4b9a8df6af6fd2b6729000290fda4e.webp',
          hotelAddress: 'Nørrevej 80',
          hotelPostcode: 3070,
          hotelCity: 'Snekkersten',
          hotelCountry: 'Denmark',
          rooms: [
            {
              type: 'Single Room',
              description:
                "Comwell Hotels' single rooms are thoughtfully designed havens crafted to cater to the needs of solo travelers. These rooms feature contemporary decor, ensuring a harmonious blend of comfort and functionality. Equipped with modern amenities, a comfortable bed, and a stylish interior, our single rooms provide a welcoming retreat for guests traveling alone. Whether it's for business or leisure, these rooms offer a peaceful environment to unwind and enjoy a restful stay at Comwell Hotels.",
              availability: 36,
              facilities: [
                'Double bed',
                'TV',
                'Workspace',
                'Safety deposit box',
                'Hair dryer',
                'Bathroom with shower',
                'Bodylotion & Balsam',
                'Coffee maker',
              ],
              price: 1099,
              roomImage:
                'https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/hoteller/ckp/vaerelser/comwell-kellers-park-standard-vaerelse-1680266637.jpg/6ee4a9d799e044122b283cd31ac7415e.webp',
              roomImage2:
                'https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/hoteller/cbo/vaerelser/comwell-borupgaard-standard-room-02.jpg/08888c52eedc223bcdb901b2d99b651d.webp',
              size: 24,
            },
            {
              type: 'Double Room',
              description:
                "Comwell Hotels' double rooms provide a cozy and inviting space for guests seeking shared accommodation. Elegantly designed with a modern touch, these rooms offer comfort and convenience for couples or friends traveling together. The well-appointed double beds, combined with contemporary furnishings, create a warm and relaxing atmosphere. With amenities designed to enhance the overall guest experience, our double rooms provide a comfortable retreat for those looking to enjoy a memorable stay at Comwell Hotels.",
              availability: 12,
              facilities: [
                'Twin bed',
                'TV',
                'Free Wifi',
                'Coffee and tee maker',
                'Workspace',
                'Balcony',
                'Lounge chair',
                'Iron & ironing board',
                'Safety deposit box',
                'Hair dryer',
                'Bodylotion & Balsam',
              ],
              price: 1499,
              roomImage:
                'https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/hoteller/ckp/vaerelser/comwell-kellers-park-superior-vaerelse-1680266772.jpg/852c84e2eb0ad5eaa15f808d818bbfa4.webp',
              roomImage2:
                'https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/hoteller/cbo/vaerelser/comwell-borupgaard-sdbo-02.jpg/a1abdb92433223b197a8092aad381540.webp',
              size: 30,
            },
            {
              type: 'Suite',
              description:
                "Comwell Hotels' suites redefine luxury, offering an exclusive and indulgent experience for discerning guests. These spacious accommodations feature a harmonious blend of sophistication and comfort, providing a private sanctuary for relaxation. The suites boast elegant interiors, premium furnishings, and thoughtfully curated amenities. Whether you're on a romantic getaway or a business trip, our suites cater to your every need, ensuring a memorable stay. Enjoy personalized service, stunning views, and an ambiance of refined opulence in Comwell Hotels' exquisite suites.",
              availability: 6,
              facilities: [
                'King size bed',
                'Kitchen',
                'Two additional rooms',
                'TV',
                'Free Wifi',
                'Coffee and tee maker',
                'Workspace',
                'Balcony',
                'Lounge chair',
                'Iron & ironing board',
                'Safety deposit box',
                'Hair dryer',
                'Bodylotion & Balsam',
              ],
              price: 2499,
              roomImage:
                'https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/hoteller/cal/vaerelser/comwell-aalborg-suite.jpg/6de7714610ce07f2afdd523b7f85c9a2.webp',
              roomImage2:
                'https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/hoteller/cbo/vaerelser/comwell-borupgaard-subo-02.jpg/1992cf048d82fa55bded365e9e5b1e12.webp',
              size: 66,
            },
          ],
          welcome:
            "Comwell Borupgaard is located in central North Zealand, with a beautiful view over scenic surroundings. The hotel's modern manor house provides the perfect surroundings for meetings, conferences or large parties.\n\nThe hotel's wonderful spa and great restaurant make this hotel the obvious choice for a weekend trip or a mini-break.",
        },
        {
          name: 'Copenhagen Portside',
          region: 'Zealand',
          description: 'Urban and delicate in the lively Nordhavn',
          location: 'Nordhavn',
          hotelImage:
            'https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/hoteller/ccp/comwell-portside-06.jpg/6a816480ae65dd072c336e45366d915e.webp',
          hotelAddress: 'Alexandriagade 1',
          hotelPostcode: 2150,
          hotelCity: 'Copenhagen',
          hotelCountry: 'Denmark',
          rooms: [
            {
              type: 'Single Room',
              description:
                "Comwell Hotels' single rooms are thoughtfully designed havens crafted to cater to the needs of solo travelers. These rooms feature contemporary decor, ensuring a harmonious blend of comfort and functionality. Equipped with modern amenities, a comfortable bed, and a stylish interior, our single rooms provide a welcoming retreat for guests traveling alone. Whether it's for business or leisure, these rooms offer a peaceful environment to unwind and enjoy a restful stay at Comwell Hotels.",
              availability: 36,
              facilities: [
                'Double bed',
                'TV',
                'Workspace',
                'Safety deposit box',
                'Hair dryer',
                'Bathroom with shower',
                'Bodylotion & Balsam',
                'Coffee maker',
              ],
              price: 1099,
              roomImage:
                'https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/hoteller/ckp/vaerelser/comwell-kellers-park-standard-vaerelse-1680266637.jpg/6ee4a9d799e044122b283cd31ac7415e.webp',
              roomImage2:
                'https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/hoteller/cbo/vaerelser/comwell-borupgaard-standard-room-02.jpg/08888c52eedc223bcdb901b2d99b651d.webp',
              size: 24,
            },
            {
              type: 'Double Room',
              description:
                "Comwell Hotels' double rooms provide a cozy and inviting space for guests seeking shared accommodation. Elegantly designed with a modern touch, these rooms offer comfort and convenience for couples or friends traveling together. The well-appointed double beds, combined with contemporary furnishings, create a warm and relaxing atmosphere. With amenities designed to enhance the overall guest experience, our double rooms provide a comfortable retreat for those looking to enjoy a memorable stay at Comwell Hotels.",
              availability: 12,
              facilities: [
                'Twin bed',
                'TV',
                'Free Wifi',
                'Coffee and tee maker',
                'Workspace',
                'Balcony',
                'Lounge chair',
                'Iron & ironing board',
                'Safety deposit box',
                'Hair dryer',
                'Bodylotion & Balsam',
              ],
              price: 1499,
              roomImage:
                'https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/hoteller/ckp/vaerelser/comwell-kellers-park-superior-vaerelse-1680266772.jpg/852c84e2eb0ad5eaa15f808d818bbfa4.webp',
              roomImage2:
                'https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/hoteller/cbo/vaerelser/comwell-borupgaard-sdbo-02.jpg/a1abdb92433223b197a8092aad381540.webp',
              size: 30,
            },
            {
              type: 'Suite',
              description:
                "Comwell Hotels' suites redefine luxury, offering an exclusive and indulgent experience for discerning guests. These spacious accommodations feature a harmonious blend of sophistication and comfort, providing a private sanctuary for relaxation. The suites boast elegant interiors, premium furnishings, and thoughtfully curated amenities. Whether you're on a romantic getaway or a business trip, our suites cater to your every need, ensuring a memorable stay. Enjoy personalized service, stunning views, and an ambiance of refined opulence in Comwell Hotels' exquisite suites.",
              availability: 6,
              facilities: [
                'King size bed',
                'Kitchen',
                'Two additional rooms',
                'TV',
                'Free Wifi',
                'Coffee and tee maker',
                'Workspace',
                'Balcony',
                'Lounge chair',
                'Iron & ironing board',
                'Safety deposit box',
                'Hair dryer',
                'Bodylotion & Balsam',
              ],
              price: 2499,
              roomImage:
                'https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/hoteller/cal/vaerelser/comwell-aalborg-suite.jpg/6de7714610ce07f2afdd523b7f85c9a2.webp',
              roomImage2:
                'https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/hoteller/cbo/vaerelser/comwell-borupgaard-subo-02.jpg/1992cf048d82fa55bded365e9e5b1e12.webp',
              size: 66,
            },
          ],
          welcome:
            "Step inside the lobby of Comwell Copenhagen Portside and be blown away by the lively atmosphere. Here you'll find a mix of locals stopping by for a fresh cup of coffee, freelancers working in the open Co-Work area, and international guests meeting over a cocktail. A Nordic version of a lively Italian square. Raw. Refined and incomparable. We are located in the heart of the booming Nordhavn surrounded by water and with amazing access to everything a port city has to offer - just 20 minutes from Copenhagen Airport and 10 minutes from the Copenhagen Central Station.",
        },
        {
          name: 'HC Andersen Hotel',
          region: 'Funen',
          description: 'In the heart of Odense',
          location: 'Odense',
          hotelImage:
            'https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/hoteller/chc/reception/comwell-hca-odense-reception-01.jpg/e48f708d9b4b390b6d03d34e1c964d57.webp',
          hotelAddress: 'Claus Bergs Gade 7',
          hotelPostcode: 5000,
          hotelCity: 'Odense',
          hotelCountry: 'Denmark',
          rooms: [
            {
              type: 'Single Room',
              description:
                "Comwell Hotels' single rooms are thoughtfully designed havens crafted to cater to the needs of solo travelers. These rooms feature contemporary decor, ensuring a harmonious blend of comfort and functionality. Equipped with modern amenities, a comfortable bed, and a stylish interior, our single rooms provide a welcoming retreat for guests traveling alone. Whether it's for business or leisure, these rooms offer a peaceful environment to unwind and enjoy a restful stay at Comwell Hotels.",
              availability: 36,
              facilities: [
                'Double bed',
                'TV',
                'Workspace',
                'Safety deposit box',
                'Hair dryer',
                'Bathroom with shower',
                'Bodylotion & Balsam',
                'Coffee maker',
              ],
              price: 1099,
              roomImage:
                'https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/hoteller/ckp/vaerelser/comwell-kellers-park-standard-vaerelse-1680266637.jpg/6ee4a9d799e044122b283cd31ac7415e.webp',
              roomImage2:
                'https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/hoteller/cbo/vaerelser/comwell-borupgaard-standard-room-02.jpg/08888c52eedc223bcdb901b2d99b651d.webp',
              size: 24,
            },
            {
              type: 'Double Room',
              description:
                "Comwell Hotels' double rooms provide a cozy and inviting space for guests seeking shared accommodation. Elegantly designed with a modern touch, these rooms offer comfort and convenience for couples or friends traveling together. The well-appointed double beds, combined with contemporary furnishings, create a warm and relaxing atmosphere. With amenities designed to enhance the overall guest experience, our double rooms provide a comfortable retreat for those looking to enjoy a memorable stay at Comwell Hotels.",
              availability: 12,
              facilities: [
                'Twin bed',
                'TV',
                'Free Wifi',
                'Coffee and tee maker',
                'Workspace',
                'Balcony',
                'Lounge chair',
                'Iron & ironing board',
                'Safety deposit box',
                'Hair dryer',
                'Bodylotion & Balsam',
              ],
              price: 1499,
              roomImage:
                'https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/hoteller/ckp/vaerelser/comwell-kellers-park-superior-vaerelse-1680266772.jpg/852c84e2eb0ad5eaa15f808d818bbfa4.webp',
              roomImage2:
                'https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/hoteller/cbo/vaerelser/comwell-borupgaard-sdbo-02.jpg/a1abdb92433223b197a8092aad381540.webp',
              size: 30,
            },
            {
              type: 'Suite',
              description:
                "Comwell Hotels' suites redefine luxury, offering an exclusive and indulgent experience for discerning guests. These spacious accommodations feature a harmonious blend of sophistication and comfort, providing a private sanctuary for relaxation. The suites boast elegant interiors, premium furnishings, and thoughtfully curated amenities. Whether you're on a romantic getaway or a business trip, our suites cater to your every need, ensuring a memorable stay. Enjoy personalized service, stunning views, and an ambiance of refined opulence in Comwell Hotels' exquisite suites.",
              availability: 6,
              facilities: [
                'King size bed',
                'Kitchen',
                'Two additional rooms',
                'TV',
                'Free Wifi',
                'Coffee and tee maker',
                'Workspace',
                'Balcony',
                'Lounge chair',
                'Iron & ironing board',
                'Safety deposit box',
                'Hair dryer',
                'Bodylotion & Balsam',
              ],
              price: 2499,
              roomImage:
                'https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/hoteller/cal/vaerelser/comwell-aalborg-suite.jpg/6de7714610ce07f2afdd523b7f85c9a2.webp',
              roomImage2:
                'https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/hoteller/cbo/vaerelser/comwell-borupgaard-subo-02.jpg/1992cf048d82fa55bded365e9e5b1e12.webp',
              size: 66,
            },
          ],
          welcome:
            "We have finally closed the gap on the national map with the ideal hotel and venue in Odense, for the first time bringing our well-known brand, great management and well-developed concepts to Denmark's third-largest city.    \n\nComwell H.C. Andersen Odense is located in the city centre, just a few minutes walk from the station, the pedestrian shopping street and H.C. Andersen's House and other attractions. Whether you need accommodation for a private or business stay, Comwell H.C. Andersen Odense is the ideal choice with 157 comfortable and modern rooms close to everything.  \n\nAs an extension of our hotel services, we also offer some of Denmark's best and most flexible meeting facilities in ODEON.",
        },
        {
          name: 'Kongebrogaarden',
          region: 'Funen',
          description: 'Pampering, presence and aesthetics',
          location: 'Middelfart',
          hotelImage:
            'https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/hoteller/ckg/rs23582_kongebrogaarden-026-original.jpg/94c4aea04a8a530f444572fbc53f31c9.webp',
          hotelAddress: 'Karensmindevej 3',
          hotelPostcode: 5500,
          hotelCity: 'Middelfart',
          hotelCountry: 'Denmark',
          rooms: [
            {
              type: 'Single Room',
              description:
                "Comwell Hotels' single rooms are thoughtfully designed havens crafted to cater to the needs of solo travelers. These rooms feature contemporary decor, ensuring a harmonious blend of comfort and functionality. Equipped with modern amenities, a comfortable bed, and a stylish interior, our single rooms provide a welcoming retreat for guests traveling alone. Whether it's for business or leisure, these rooms offer a peaceful environment to unwind and enjoy a restful stay at Comwell Hotels.",
              availability: 36,
              facilities: [
                'Double bed',
                'TV',
                'Workspace',
                'Safety deposit box',
                'Hair dryer',
                'Bathroom with shower',
                'Bodylotion & Balsam',
                'Coffee maker',
              ],
              price: 1099,
              roomImage:
                'https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/hoteller/ckp/vaerelser/comwell-kellers-park-standard-vaerelse-1680266637.jpg/6ee4a9d799e044122b283cd31ac7415e.webp',
              roomImage2:
                'https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/hoteller/cbo/vaerelser/comwell-borupgaard-standard-room-02.jpg/08888c52eedc223bcdb901b2d99b651d.webp',
              size: 24,
            },
            {
              type: 'Double Room',
              description:
                "Comwell Hotels' double rooms provide a cozy and inviting space for guests seeking shared accommodation. Elegantly designed with a modern touch, these rooms offer comfort and convenience for couples or friends traveling together. The well-appointed double beds, combined with contemporary furnishings, create a warm and relaxing atmosphere. With amenities designed to enhance the overall guest experience, our double rooms provide a comfortable retreat for those looking to enjoy a memorable stay at Comwell Hotels.",
              availability: 12,
              facilities: [
                'Twin bed',
                'TV',
                'Free Wifi',
                'Coffee and tee maker',
                'Workspace',
                'Balcony',
                'Lounge chair',
                'Iron & ironing board',
                'Safety deposit box',
                'Hair dryer',
                'Bodylotion & Balsam',
              ],
              price: 1499,
              roomImage:
                'https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/hoteller/ckp/vaerelser/comwell-kellers-park-superior-vaerelse-1680266772.jpg/852c84e2eb0ad5eaa15f808d818bbfa4.webp',
              roomImage2:
                'https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/hoteller/cbo/vaerelser/comwell-borupgaard-sdbo-02.jpg/a1abdb92433223b197a8092aad381540.webp',
              size: 30,
            },
            {
              type: 'Suite',
              description:
                "Comwell Hotels' suites redefine luxury, offering an exclusive and indulgent experience for discerning guests. These spacious accommodations feature a harmonious blend of sophistication and comfort, providing a private sanctuary for relaxation. The suites boast elegant interiors, premium furnishings, and thoughtfully curated amenities. Whether you're on a romantic getaway or a business trip, our suites cater to your every need, ensuring a memorable stay. Enjoy personalized service, stunning views, and an ambiance of refined opulence in Comwell Hotels' exquisite suites.",
              availability: 6,
              facilities: [
                'King size bed',
                'Kitchen',
                'Two additional rooms',
                'TV',
                'Free Wifi',
                'Coffee and tee maker',
                'Workspace',
                'Balcony',
                'Lounge chair',
                'Iron & ironing board',
                'Safety deposit box',
                'Hair dryer',
                'Bodylotion & Balsam',
              ],
              price: 2499,
              roomImage:
                'https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/hoteller/cal/vaerelser/comwell-aalborg-suite.jpg/6de7714610ce07f2afdd523b7f85c9a2.webp',
              roomImage2:
                'https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/hoteller/cbo/vaerelser/comwell-borupgaard-subo-02.jpg/1992cf048d82fa55bded365e9e5b1e12.webp',
              size: 66,
            },
          ],
          welcome:
            "Kongebrogaarden is a very special place with peace, aesthetics and atmosphere.\n\nFrom 1584 the place functioned as a service/crossing/shipping point for King Frederik II. Since then, the King's son, the well-known Christian IV, also used the place. From 1812 Kongebrogaarden became an inn and later a restaurant.\n\nJust a few days after the start of World War I, Danish soldiers were lodged at Kongebrogaarden and all the way up the coast they took in boat refugees - young men from Southern Jutland, who fled from the German war service. During World War II, the place was a popular establishment for the Nazis living there.\n\nIn 2011, Comwell Hotels took ownership of Kongebrogaarden, and in 2018 the hotel was voted for 'Best Luxury Hotel of the Year'.",
        },
      ];

      // Clear existing data
      await this.hotelModel.deleteMany({});

      // Insert hotel data into the database
      await this.hotelModel.insertMany(hotels);

      console.log('Data seeded successfully');
    } catch (err) {
      console.error('Error: ', err);
    }
  }
}
