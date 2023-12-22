import { Test, TestingModule } from '@nestjs/testing';
import { HotelsController } from './hotels.controller';
import { HotelsService } from './hotels.service';
import { getModelToken } from '@nestjs/mongoose';

describe('HotelsController', () => {
  let controller: HotelsController;
  let module: TestingModule;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      controllers: [HotelsController],
      providers: [
        HotelsService,
        {
          provide: getModelToken('Hotel'),
          useValue: [
            {
              _id: {
                $oid: '658553acd6e1f1af30177e38',
              },
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
                  _id: {
                    $oid: '658553acd6e1f1af30177e39',
                  },
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
                  _id: {
                    $oid: '658553acd6e1f1af30177e3a',
                  },
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
                  _id: {
                    $oid: '658553acd6e1f1af30177e3b',
                  },
                },
              ],
              __v: 0,
            },
          ],
        },
      ],
    }).compile();

    controller = module.get<HotelsController>(HotelsController);
  });

  afterEach(async () => {
    await module.close();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
