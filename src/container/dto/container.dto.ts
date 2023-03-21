import { IsNotEmpty, IsNumber, IsOptional, IsString, Length } from 'class-validator';

export class ContainerDTO {
    @IsNotEmpty()
    @IsString()
    @Length(3)
    VSL_SLAN_CD: string;
    @IsOptional()
    @IsString()
    @Length(4)
    VSL_SLAN_NM: string;
    @IsOptional()
    @IsString()
    @Length(1)
    VSL_SVC_TP_CD:string;
    @IsOptional()
    @IsString()
    @Length(1)
    VSL_TP_CD: string;
    @IsOptional()
    @IsString()
    ST_EFF_DT: string;
    @IsOptional()
    @IsString()
    END_EFF_DT: string;
    @IsOptional()
    @IsString()
    @Length(8)
    VSL_SLAN_SKD_TP_CD: string;
    @IsOptional()
    @IsString()
    @Length(1)
    OFC_CD: string;
    @IsOptional()
    @IsString()
    @Length(6)
    CO_CD: string;
    @IsOptional()
    @IsString()
    @Length(1)
    FDR_DIV_CD: string;
    @IsOptional()
    @IsString()
    @Length(1)
    CRE_USR_ID: string;
    @IsOptional()
    @IsString()
    @Length(100)
    CRE_DT: string;
    @IsOptional()
    @IsString()
    @Length(100)
    UPD_USR_ID: string;
    @IsOptional()
    @IsString()
    @Length(100)
    UPD_DT: string;
    @IsOptional()
    @IsString()
    @Length(1)
    DELT_FLG: string;
    @IsOptional()
    @IsString()
    EAI_EVNT_DT: string;
    @IsOptional()
    @IsNumber()
    @Length(6)
    CNL_AGN_VNDR_SEQ: number;
    @IsOptional()
    @IsString()
    @Length(6)
    VSKD_FLET_GRP_CD: string;
    @IsOptional()
    @IsString()
    @Length(1)
    SPCL_CGO_RQST_TGT_LANE_FLG: string;
    @IsOptional()
    @IsString()
    @Length(1)
    ACT_SKD_TGT_FLG: string;
    @IsOptional()
    @IsString()
    @Length(1)
    MODI_COST_CTR_CD: string;
    @IsOptional()
    @IsString()
    @Length(1)
    MODI_VSL_SLAN_CD2: string;
    @IsOptional()
    @IsString()
    EDW_UPD_DT: string;
    @IsOptional()
    @IsString()
    @Length(32)
    MODI_VIP_TEAM_CD: string;
}


