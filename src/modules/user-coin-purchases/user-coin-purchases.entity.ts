import { Column, Model, Table, DataType, PrimaryKey, ForeignKey, BelongsTo, Sequelize } from 'sequelize-typescript';
import { User } from '../users/users.entity';
import { CoinPackage } from '../coin-packages/coin-packages.entity';

@Table({ tableName: 'user_coin_purchases' })
export class UserCoinPurchase extends Model<UserCoinPurchase> {
  @PrimaryKey
  @Column({ type: DataType.BIGINT, autoIncrement: true })
  purchase_id: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.BIGINT, allowNull: false })
  user_id: number;

  @ForeignKey(() => CoinPackage)
  @Column({ type: DataType.BIGINT, allowNull: false })
  package_id: number;

  @Column({ type: DataType.DATE, defaultValue: DataType.NOW })
  purchase_date: Date;

  @BelongsTo(() => User)
  user: User;

  @BelongsTo(() => CoinPackage)
  coinPackage: CoinPackage;
}
