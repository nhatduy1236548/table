import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Container } from './container.entity';
import { ContainerRepository } from './container.repository';
import { ContainerDTO } from './dto/container.dto';
import { GetContainersFilterDto } from './dto/GetContainersFilterDTO';

@Injectable()
export class ContainerService {
    private readonly logger = new Logger(ContainerService.name);
  constructor(
    @InjectRepository(ContainerRepository)
    private containerRepository:ContainerRepository
  ){}

  async getContainers(filterDto:GetContainersFilterDto): Promise<Container[]> {
    return this.containerRepository.getTasks(filterDto);
  }

  async getContainerById(VSL_SLAN_CD: string): Promise<Container>{
    const found = await this.containerRepository.findOne(
      {
        where: {
            VSL_SLAN_CD,
        },
    }
    );
    this.logger.log(`${found}`);
    if(!found) {
      throw new NotFoundException(`Task with ID "${VSL_SLAN_CD}" not found`)
    }

    return found;
  }

  async createContainer(containerDTO:ContainerDTO): Promise<Container>{
    this.logger.log(`
    ${containerDTO.VSL_SLAN_CD}
    +${containerDTO.VSL_SLAN_NM}
    +${containerDTO.VSL_SVC_TP_CD}
    +${containerDTO.VSL_TP_CD }
    +${containerDTO.ST_EFF_DT}
    +${containerDTO.END_EFF_DT}
    +${containerDTO.VSL_SLAN_SKD_TP_CD}
    +${containerDTO.OFC_CD}
    +${containerDTO.CO_CD}
    +${containerDTO.FDR_DIV_CD}
    +${containerDTO.CRE_USR_ID}
    +${containerDTO.CRE_DT}
    +${containerDTO.UPD_USR_ID}
    +${containerDTO.UPD_DT}
    +${containerDTO.DELT_FLG}
    +${containerDTO.EAI_EVNT_DT}
    +${containerDTO.CNL_AGN_VNDR_SEQ}
    +${containerDTO.VSKD_FLET_GRP_CD}
    +${containerDTO.SPCL_CGO_RQST_TGT_LANE_FLG}
    +${containerDTO.ACT_SKD_TGT_FLG}
    +${containerDTO.MODI_COST_CTR_CD}
    +${containerDTO.MODI_VSL_SLAN_CD2}
    +${containerDTO.EDW_UPD_DT}
    +${containerDTO.MODI_VIP_TEAM_CD}
    `);
    return this.containerRepository.save(containerDTO);
  }

  async deleteContainer(VSL_SLAN_CD: string): Promise<void> {
    const result = await this.containerRepository.delete(VSL_SLAN_CD);

    if(result.affected === 0) {
      throw new NotFoundException(`Task with ID "${VSL_SLAN_CD}" not found`);
    }
  }

  async updateContainerStatus(VSL_SLAN_CD: string, status:number):Promise<Container>{
    const container =await this.getContainerById(VSL_SLAN_CD);
     container.CNL_AGN_VNDR_SEQ= status;
     await this.containerRepository.save(container);
    return container;
  }
}
