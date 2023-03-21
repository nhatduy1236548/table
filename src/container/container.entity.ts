import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Container {
     //@PrimaryGeneratedColumn('uuid')
     @PrimaryColumn({ type: 'varchar'})
    VSL_SLAN_CD: string;

    @Column({ type: 'varchar', nullable: true})
    VSL_SLAN_NM: string;

    @Column({ type: 'varchar', nullable: true })
    VSL_SVC_TP_CD : string;

    @Column({ type: 'varchar', nullable: true })
    VSL_TP_CD : string;

    @Column({ type: 'varchar', nullable: true })
    ST_EFF_DT: string;

    @Column({ type: 'varchar', nullable: true })
    END_EFF_DT: string;

    @Column({ type: 'varchar', nullable: true })
    VSL_SLAN_SKD_TP_CD: string;

    @Column({ type: 'varchar', nullable: true })
    OFC_CD: string;

    @Column({ type: 'varchar', nullable: true })
    CO_CD: string;

    @Column({ type: 'date', nullable: true })
    FDR_DIV_CD: string;

    @Column({ type: 'varchar', nullable: true})
    CRE_USR_ID: string;

    @Column({ type: 'date', nullable: true })
    CRE_DT: string;

    @Column({ type: 'varchar', nullable: true})
    UPD_USR_ID: string;

    @Column({ type: 'date', nullable: true })
    UPD_DT: string;

    @Column({ type: 'varchar', nullable: true})
    DELT_FLG: string;

    @Column({ type: 'date', nullable: true })
    EAI_EVNT_DT: string;

    @Column({ type: 'int', nullable: true })
    CNL_AGN_VNDR_SEQ: number;

    @Column({ type: 'varchar', nullable: true})
    VSKD_FLET_GRP_CD: string;

    @Column({ type: 'varchar', nullable: true })
    SPCL_CGO_RQST_TGT_LANE_FLG: string;

    @Column( { type: 'varchar', nullable: true })
    ACT_SKD_TGT_FLG: string;

    @Column({ type: 'varchar', nullable: true })
    MODI_COST_CTR_CD: string;

    @Column({ type: 'varchar', nullable: true})
    MODI_VSL_SLAN_CD2: string;

    @Column({ type: 'date', nullable: true })
    EDW_UPD_DT: string;

    @Column({ type: 'varchar', nullable: true })
    MODI_VIP_TEAM_CD: string;
}