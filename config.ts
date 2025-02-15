import { Offer } from 'src/offers/entities/offer.entity';
import { User } from 'src/users/entities/user.entity';
import { Wish } from 'src/wishes/entities/wish.entity';
import { Wishlist } from 'src/wishlists/entities/wishlist.entity';

export default () => ({
  database: {
    type: process.env.DATABASE_TYPE || 'postgres',
    url: process.env.DATABASE_URL || 'localhost',
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
    username: process.env.DATABASE_USER || 'student',
    password: process.env.DATABASE_PASSWORD || '1111',
    database: process.env.DATABASE_NAME || 'kupipodariday',
    entities: [User, Wish, Wishlist, Offer],
    synchronize: true,
  },
  jwtSecret: process.env.JWT_SECRET || 'some-super-secret-key',
});
