import { Injectable, Logger } from "@nestjs/common";
import { GetContainersFilterDto } from "./dto/GetContainersFilterDTO";
import { ContainerDTO } from "./dto/container.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Container } from "./container.entity";

@Injectable()
export class ContainerRepository extends Repository<Container> {
    private readonly logger = new Logger(ContainerRepository.name);
    constructor(
        @InjectRepository(Container)
          repository: Repository<Container>
      ) {
        super(repository.target, repository.manager, repository.queryRunner);
      }
    async getTasks(filterDto:GetContainersFilterDto): Promise<Container[]>{
        this.logger.log(`${123}`)
        const query = this.createQueryBuilder('task');
        const {VSL_SLAN_CD} = filterDto;
        if(VSL_SLAN_CD){
            query.andWhere('task.name= :name',{name});
        }
        const tasks = await query.getMany();
        return tasks;
    }
    
    async createTask(containerDTO:ContainerDTO): Promise<Container>{
        this.logger.log(`${123}`);
        const {VSL_SLAN_CD,
            VSL_SLAN_NM,
            VSL_SVC_TP_CD,
            VSL_TP_CD ,
            ST_EFF_DT,
            END_EFF_DT,
            VSL_SLAN_SKD_TP_CD,
            OFC_CD,
            CO_CD,
            FDR_DIV_CD,
            CRE_USR_ID,
            CRE_DT,
            UPD_USR_ID,
            UPD_DT,
            DELT_FLG,
            EAI_EVNT_DT,
            CNL_AGN_VNDR_SEQ,
            VSKD_FLET_GRP_CD,
            SPCL_CGO_RQST_TGT_LANE_FLG,
            ACT_SKD_TGT_FLG,
            MODI_COST_CTR_CD,
            MODI_VSL_SLAN_CD2,
            EDW_UPD_DT,
            MODI_VIP_TEAM_CD} = containerDTO;

        const container = this.create({
            VSL_SLAN_CD,
            VSL_SLAN_NM,
            VSL_SVC_TP_CD,
            VSL_TP_CD ,
            ST_EFF_DT,
            END_EFF_DT,
            VSL_SLAN_SKD_TP_CD,
            OFC_CD,
            CO_CD,
            FDR_DIV_CD,
            CRE_USR_ID,
            CRE_DT,
            UPD_USR_ID,
            UPD_DT,
            DELT_FLG,
            EAI_EVNT_DT,
            CNL_AGN_VNDR_SEQ,
            VSKD_FLET_GRP_CD,
            SPCL_CGO_RQST_TGT_LANE_FLG,
            ACT_SKD_TGT_FLG,
            MODI_COST_CTR_CD,
            MODI_VSL_SLAN_CD2,
            EDW_UPD_DT,
            MODI_VIP_TEAM_CD
        });

        await this.save(container);
        return container;
    }
}