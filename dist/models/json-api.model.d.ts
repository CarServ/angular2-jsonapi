import { Observable } from 'rxjs';
import { JsonApiDatastore } from '../services/json-api-datastore.service';
import { ModelConfig } from '../interfaces/model-config.interface';
import { HttpHeaders } from '@angular/common/http';
import { JsonApiMetaModel } from '..';
export declare class JsonApiModel {
    private internalDatastore;
    protected data?: any;
    id: string;
    modelInitialization: boolean;
    [key: string]: any;
    lastSyncModels: Array<any>;
    constructor(internalDatastore: JsonApiDatastore, data?: any);
    readonly meta: JsonApiMetaModel;
    readonly relationships: any;
    isModelInitialization(): boolean;
    syncRelationships(data: any, included: any, remainingModels?: Array<any>): void;
    save(params?: any, headers?: HttpHeaders, customUrl?: string): Observable<this>;
    readonly hasDirtyAttributes: boolean;
    private checkChanges;
    rollbackAttributes(): void;
    readonly modelConfig: ModelConfig;
    private parseHasMany;
    private parseBelongsTo;
    private getHasManyRelationship;
    private getBelongsToRelationship;
    private createOrPeek;
}
