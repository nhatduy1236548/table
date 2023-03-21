import { Body, Controller, Delete, Get, Logger, Param, Patch, Post, Query } from '@nestjs/common';
import { Container } from './container.entity';
import { ContainerService } from './container.service';
import { ContainerDTO } from './dto/container.dto';
import { GetContainersFilterDto } from './dto/GetContainersFilterDTO';

@Controller('container')
export class ContainerController {
    private readonly logger = new Logger(ContainerController.name);
    constructor(private containerService: ContainerService) {}
    @Get('/:VSL_SLAN_CD')
    getContainerById(@Param('VSL_SLAN_CD') VSL_SLAN_CD: string): Promise<Container> {
        return this.containerService.getContainerById(VSL_SLAN_CD);  
    }

    @Post()
    createContainer(@Body() containerDTO:ContainerDTO): Promise<Container> {
        this.logger.log(`${containerDTO.CNL_AGN_VNDR_SEQ}`);
        return this.containerService.createContainer(containerDTO);
    }

    @Delete('/:VSL_SLAN_CD')
    deleteContainer(@Param('VSL_SLAN_CD') VSL_SLAN_CD: string):Promise<void> {
        return this.containerService.deleteContainer(VSL_SLAN_CD);
    }

    @Get()
    getConatainer(@Query() filterDto:GetContainersFilterDto ): Promise<Container[]>{
        return this.containerService.getContainers(filterDto);
    }

    @Patch('/:VSL_SLAN_CD')
    updateTaskStatus(@Param('VSL_SLAN_CD') VSL_SLAN_CD: string,
        @Body('CNL_AGN_VNDR_SEQ') status: number
    ):Promise<Container> {
        this.logger.log(`${status}`);
        return this.containerService.updateContainerStatus(VSL_SLAN_CD, status);
    }
}
