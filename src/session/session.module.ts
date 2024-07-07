import { Module } from '@nestjs/common';

import { DocumentSessionPersistenceModule } from './infrastructure/persistence/document/document-persistence.module';
import { SessionService } from './session.service';


// <database-block>
const infrastructurePersistenceModule = DocumentSessionPersistenceModule
  
// </database-block>

@Module({
  imports: [infrastructurePersistenceModule],
  providers: [SessionService],
  exports: [SessionService, infrastructurePersistenceModule],
})
export class SessionModule {}
