import { Module, type DynamicModule } from '@nestjs/common'
import { EnvConfigService } from './env-config.service'
import { ConfigModule, type ConfigModuleOptions } from '@nestjs/config'
import { join } from 'node:path'

@Module({
  providers: [EnvConfigService],
})
export class EnvConfigModule {
  static forRoot(options: ConfigModuleOptions = {}): DynamicModule {
    return {
      module: EnvConfigModule,
      imports: [
        ConfigModule.forRoot({
          ...options,
          isGlobal: true,
          envFilePath: [
            join(__dirname, `../../../../.env.${process.env.NODE_ENV}`),
          ],
        }),
      ],
    }
  }
}
