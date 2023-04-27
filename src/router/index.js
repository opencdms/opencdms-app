import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'

// utilities
import {loadData} from '@/utils/load-data.js';

// import models for pinia-orm
import {useRepo} from 'pinia-orm';
// referencee data
import ClimateZone from '@/models/ClimateZone';
import ControlSchedule from '@/models/ControlSchedule';
import Exposure from '@/models/Exposure';
import FacilityType from '@/models/FacilityType';
import FeatureType from '@/models/FeatureType';
import MaintenanceSchedule from '@/models/MaintenanceSchedule';
import MediaType from '@/models/MediaType';
import ObservationType from '@/models/ObservationType';
import ObservedProperty from '@/models/ObservedProperty';
import ObservingMethod from '@/models/ObservingMethod';
import ObservingProcedure from '@/models/ObservingProcedure';
import Programme from '@/models/Programme';
import ReferenceSurface from '@/models/ReferenceSurface';
import Season from '@/models/Season';
import Status from '@/models/Status';
import SourceType from '@/models/SourceType';
import SurfaceCover from '@/models/SurfaceCover';
import SurfaceRoughness from '@/models/SurfaceRoughness';
import Territory from '@/models/Territory';
import TimeZone from '@/models/TimeZone';
import Topography from '@/models/Topography';
import WmoRegion from '@/models/WmoRegion';
// business / master data

import User from '@/models/User';
import Host from '@/models/Host';
import Feature from '@/models/Feature';



const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
})

router.beforeEach( async () => {
  if( useRepo(ClimateZone).all().length === 0){await loadData('/data/reference-data/climate_zone.psv').then( (result) => { useRepo(ClimateZone).save(result) })};
  if( useRepo(ControlSchedule).all().length === 0){await loadData('/data/reference-data/control_schedule.psv').then( (result) => { useRepo(ControlSchedule).save(result) })};
  if( useRepo(Exposure).all().length === 0){await loadData('/data/reference-data/exposure.psv').then( (result) => { useRepo(Exposure).save(result) })};
  if( useRepo(FacilityType).all().length === 0){await loadData('/data/reference-data/facility_type.psv').then( (result) => { useRepo(FacilityType).save(result) })};
  if( useRepo(FeatureType).all().length === 0){await loadData('/data/reference-data/feature_type.psv').then( (result) => { useRepo(FeatureType).save(result) })};
  if( useRepo(MaintenanceSchedule).all().length === 0){await loadData('/data/reference-data/maintenance_schedule.psv').then( (result) => { useRepo(MaintenanceSchedule).save(result) })};
  if( useRepo(MediaType).all().length === 0){await loadData('/data/reference-data/media_type.psv').then( (result) => { useRepo(MediaType).save(result) })};
  if( useRepo(ObservationType).all().length === 0){await loadData('/data/reference-data/observation_type.psv').then( (result) => { useRepo(ObservationType).save(result) })};
  if( useRepo(ObservedProperty).all().length === 0){await loadData('/data/reference-data/observed_property.psv').then( (result) => { useRepo(ObservedProperty).save(result) })};
  if( useRepo(ObservingMethod).all().length === 0){await loadData('/data/reference-data/observing_method.psv').then( (result) => { useRepo(ObservingMethod).save(result) })};
  if( useRepo(ObservingProcedure).all().length === 0){await loadData('/data/reference-data/observing_procedure.psv').then( (result) => { useRepo(ObservingProcedure).save(result) })};
  if( useRepo(Programme).all().length === 0){await loadData('/data/reference-data/programme.psv').then( (result) => { useRepo(Programme).save(result) })};
  if( useRepo(ReferenceSurface).all().length === 0){await loadData('/data/reference-data/reference_surface.psv').then( (result) => { useRepo(ReferenceSurface).save(result) })};
  if( useRepo(Season).all().length === 0){await loadData('/data/reference-data/season.psv').then( (result) => { useRepo(Season).save(result) })};
  if( useRepo(SourceType).all().length === 0){await loadData('/data/reference-data/source_type.psv').then( (result) => { useRepo(SourceType).save(result) })};
  if( useRepo(Status).all().length === 0){await loadData('/data/reference-data/status.psv').then( (result) => { useRepo(Status).save(result) })};
  if( useRepo(SurfaceCover).all().length === 0){await loadData('/data/reference-data/surface_cover.psv').then( (result) => { useRepo(SurfaceCover).save(result) })};
  if( useRepo(SurfaceRoughness).all().length === 0){await loadData('/data/reference-data/surface_roughness.psv').then( (result) => { useRepo(SurfaceRoughness).save(result) })};
  if( useRepo(Territory).all().length === 0){await loadData('/data/reference-data/territory.psv').then( (result) => { useRepo(Territory).save(result) })};
  if( useRepo(TimeZone).all().length === 0){await loadData('/data/reference-data/time_zone.psv').then( (result) => { useRepo(TimeZone).save(result) })};
  if( useRepo(Topography).all().length === 0){await loadData('/data/reference-data/topography.psv').then( (result) => { useRepo(Topography).save(result) })};
  if( useRepo(WmoRegion).all().length === 0){await loadData('/data/reference-data/wmo_region.psv').then( (result) => { useRepo(WmoRegion).save(result) })};
  if( useRepo(User).all().length === 0){await loadData('/data/user.psv').then( (result) => { useRepo(User).save(result) })};
  if( useRepo(Host).all().length === 0){await loadData('/data/hosts.psv').then( (result) => { useRepo(Host).save(result) })};
  if( useRepo(Feature).all().length === 0){await loadData('/data/features.psv').then( (result) => { useRepo(Feature).save(result) })};
});

export default router
