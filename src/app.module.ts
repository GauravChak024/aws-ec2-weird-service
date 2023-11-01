import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './modules/users/users.module';
import { PrizesModule } from './modules/prizes/prizes.module';
import { TeamMembersModule } from './modules/team-members/team-members.module';
import { TeamsModule } from './modules/teams/teams.module';
import { TournamentFeesModule } from './modules/tournament-fees/tournament-fees.module';
import { TournamentRegistrationsModule } from './modules/tournament-registrations/tournament-registrations.module';
import { TournamentsModule } from './modules/tournaments/tournaments.module';
import { CoinsModule } from './modules/coins/coins.module';
import { CoinTransactionsModule } from './modules/coin-transactions/coin-transactions.module'; 
import { CoinPackagesModule } from './modules/coin-packages/coin-packages.module'; 
import { UserCoinPurchasesModule } from './modules/user-coin-purchases/user-coin-purchases.module'; 

import { User } from './modules/users/users.entity'
import { UserCoinPurchase } from './modules/user-coin-purchases/user-coin-purchases.entity';
import { Tournament } from './modules/tournaments/tournaments.entity';
import { TournamentRegistration } from './modules/tournament-registrations/tournament-registrations.entity';
import { TournamentFee } from './modules/tournament-fees/tournament-fees.entity';
import { Team } from './modules/teams/teams.entity';
import { TeamMember } from './modules/team-members/team-members.entity';
import { Prize } from './modules/prizes/prizes.entity';
import { Coin } from './modules/coins/coins.entity';
import { CoinTransaction } from './modules/coin-transactions/coin-transactions.entity';
import { CoinPackage } from './modules/coin-packages/coin-packages.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'db4free.net',
      port: 3306,
      username: 'gauravchak',
      password: 'gauravchak',
      database: 'weird_db_test',
      models: [User,UserCoinPurchase,Tournament,TournamentRegistration,TournamentFee,Team,TeamMember,Prize,Coin,CoinTransaction,CoinPackage],
    }),
    UsersModule,
    PrizesModule,
    TeamMembersModule,
    TeamsModule,
    TournamentFeesModule,
    TournamentRegistrationsModule,
    TournamentsModule,
    CoinsModule,
    CoinTransactionsModule,
    CoinPackagesModule,
    UserCoinPurchasesModule,
  ],
})
export class AppModule {}
