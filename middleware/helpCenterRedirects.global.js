export default defineNuxtRouteMiddleware((to, from) => {
  const redirectUrls = [
    { oldUrl: 'about/policies-and-standards/privacy-policy', newUrl: 'https://docs.sparc.science/docs/policies' },
    { oldUrl: 'about/policies-and-standards/terms-of-service', newUrl: 'https://docs.sparc.science/docs/terms-of-service' },
    { oldUrl: 'about/policies-and-standards/sparc-standards-process', newUrl: 'https://docs.sparc.science/docs/sparc-standards-process-2' },
    { oldUrl: 'about/sparc-help-center', newUrl: 'https://docs.sparc.science' },
    { oldUrl: 'help/instructions-to-use-the-map-core-scaffold-mapping-tool', newUrl: 'https://docs.sparc.science/docs/map-core-scaffold-mapping-tools' },
    { oldUrl: 'help/3lp5YMXqyHXAT57vFyWCe9', newUrl: 'https://docs.sparc.science/docs/supported-browsers' },
    { oldUrl: 'help/1lmX4FWezRPTCOfGsBATnt', newUrl: 'https://docs.sparc.science/docs/instructions-for-sparc-investigators-to-cite-their-datasets-in-manuscripts-1' },
    { oldUrl: 'help/the-sparc-data-and-resource-center', newUrl: 'https://docs.sparc.science/docs/getting-started' },
    { oldUrl: 'about/sparc-portal/sparc-roadmap', newUrl: 'https://docs.sparc.science/docs/sparc-portal-roadmap' },
    { oldUrl: 'help/sparc-platform-integrations', newUrl: 'https://docs.sparc.science/docs/sparc-platform-integrations' },
    { oldUrl: 'help/zQfzadwADutviJjT19hA5', newUrl: 'https://docs.sparc.science/docs/accessing-public-datasets' },
    { oldUrl: 'help/nih-sparc-confidentiality-disclosure-agreement', newUrl: 'https://docs.sparc.science/docs/nih-sparc-confidentiality-disclosure-agreement' },
    { oldUrl: 'help/35hnVPUSvTqu8szoRVcnfy', newUrl: 'https://docs.sparc.science/discuss?isFAQ=true' },
    { oldUrl: 'about/team-and-leadership/3Hd5YnMSH06kMH9dSTofrp', newUrl: 'https://docs.sparc.science/docs/sparc-governance-regulations' },
    { oldUrl: 'help/how-do-i-access-the-sparc-connectivity-knowledge-base-of-the-autonomic', newUrl: 'https://docs.sparc.science/docs/accessing-the-sparc-connectivity-knowledge-base-of-the-autonomic-nervous-system-sckan' },
    { oldUrl: 'help/sparc-drc-open-office-hours', newUrl: 'https://docs.sparc.science/docs/sparc-drc-open-office-hours' },
    { oldUrl: 'help/service-status-pages', newUrl: 'https://docs.sparc.science/docs/portal-status' },
    { oldUrl: 'help/information-for-developers', newUrl: 'https://docs.sparc.science/docs/portal-status' },
    { oldUrl: 'help/9JZsVzj2xZUMQuzx4RuU7', newUrl: 'https://docs.sparc.science/docs/getting-started-1' },
    { oldUrl: 'help/74tEteJrzNOLyExCtcdKJv', newUrl: 'https://docs.sparc.science/docs/how-to-use-and-access-sparc-data' },
    { oldUrl: 'help/3FXikFXC8shPRd8xZqhjVT', newUrl: 'https://docs.sparc.science/docs/overview-of-sparc-dataset-format' },
    { oldUrl: 'help/qvEcnv56c76V0JC0KvtSd', newUrl: 'https://docs.sparc.science/docs/navigating-a-sparc-dataset' },
    { oldUrl: 'help/accessing-published-simulations', newUrl: 'https://docs.sparc.science/docs/accessing-published-simulations' },
    { oldUrl: 'help/overview-of-gallery-viewer', newUrl: 'https://docs.sparc.science/docs/gallery-viewer-overview' },
    { oldUrl: 'help/overview-of-scaffold-viewer', newUrl: 'https://docs.sparc.science/docs/scaffold-viewer-overview' },
    { oldUrl: 'help/overview-of-integrated-maps-viewer', newUrl: 'https://docs.sparc.science/docs/integrated-maps-viewer-overview' },
    { oldUrl: 'help/information-on-organ-scaffolds', newUrl: 'https://docs.sparc.science/docs/organ-scaffolds' },
    { oldUrl: 'help/sparc-tutorials', newUrl: 'https://docs.sparc.science/docs/sparc-tutorials' },
    { oldUrl: 'help/sparc-portal-data-repository-structure', newUrl: 'https://docs.sparc.science/docs/sparc-portal-data-repository-structure' },
    { oldUrl: 'help/overview-of-image-viewer', newUrl: 'https://docs.sparc.science/docs/image-viewer-overview' },
    { oldUrl: 'help/overview-of-simulation-viewer', newUrl: 'https://docs.sparc.science/docs/simulation-viewer-overview' },
    { oldUrl: 'help/overview-of-segmentation-viewer', newUrl: 'https://docs.sparc.science/docs/segmentation-viewer-overview' },
    { oldUrl: 'help/demonstration-on-the-use-of-the-map-core-scaffold-mapping-tool-v0-16-0', newUrl: 'https://docs.sparc.science/docs/use-of-the-map-core-scaffold-mapping-tool-v0160' },
    { oldUrl: 'help/map-scaffold-mapping-tool-installation-guide', newUrl: 'https://docs.sparc.science/docs/map-scaffold-mapping-tool-installation-guide' },
    { oldUrl: 'help/publishing-a-flatmap-as-a-sparc-dataset', newUrl: 'https://docs.sparc.science/docs/publishing-a-flatmap-as-a-sparc-dataset' },
    { oldUrl: 'help/map-core-scaffold-mapping-tools', newUrl: 'https://docs.sparc.science/docs/map-core-scaffold-mapping-tools' },
    { oldUrl: 'help/7k8nEPuw3FjOq2HuS8OVsd', newUrl: 'https://docs.sparc.science/docs/data-submission-overview' },
    { oldUrl: 'help/guidelines-for-effective-titles-and-descriptions-for-sparc-datasets', newUrl: 'https://docs.sparc.science/docs/guidelines-for-effective-titles-and-descriptions-for-sparc-datasets' },
    { oldUrl: 'help/55odkPXI5HjfAr1CovdZvl', newUrl: 'https://docs.sparc.science/docs/uploading-files-to-the-dat-core' },
    { oldUrl: 'help/6Pf9VAiGc50aGIkhIiegiO', newUrl: 'https://docs.sparc.science/docs/soda-software-to-organize-data-automatically' },
    { oldUrl: 'help/59wrnT6knb7KuGPJeNgT8k', newUrl: 'https://docs.sparc.science/docs/sawg-sparc-anatomical-working-group' },
    { oldUrl: 'help/5CuQGs6lBnfSdzroVp0Etf', newUrl: 'https://docs.sparc.science/docs/user-accounts-and-teams' },
    { oldUrl: 'help/5pcAofIUjrx5ZJalTRbEkM', newUrl: 'https://docs.sparc.science/docs/fair-image-segmentation-in-mbf-bioscience-software' },
    { oldUrl: 'help/2D4nzgo7wy9Udqcr3DcrW9', newUrl: 'https://docs.sparc.science/docs/connecting-mbf-bioscience-software-to-the-pennsieve-platform' },
    { oldUrl: 'help/4iTKs1fdqMJHchgpyHOvRt', newUrl: 'https://docs.sparc.science/docs/guidelines-for-using-non-standard-file-formats' },
    { oldUrl: 'help/3dXPSu3K9u09vKQGp2zrfN', newUrl: 'https://docs.sparc.science/docs/pennsieve-metadata-templates' },
    { oldUrl: 'help/Yld8VgQMeMw43zLGotkYp', newUrl: 'https://docs.sparc.science/docs/knowledge-base-scaffolds-for-the-research-community' },
    { oldUrl: 'help/mapping-tools', newUrl: 'https://docs.sparc.science/docs/mapping-tools' },
    { oldUrl: 'help/contribute-to-the-knowledge-base', newUrl: 'https://docs.sparc.science/docs/contribute-to-the-knowledge-base' },
    { oldUrl: 'help/about-pennsieve-and-discover', newUrl: 'https://docs.sparc.science/docs/about-pennsieve-and-discover' },
    { oldUrl: 'help/organ-info', newUrl: 'https://docs.sparc.science/docs/organ-info' },
    { oldUrl: 'help/about-sparc', newUrl: 'https://docs.sparc.science/docs/about-sparc' },
    { oldUrl: 'help/anatomical-working-group', newUrl: 'https://docs.sparc.science/docs/anatomical-working-group' },
    { oldUrl: 'help/overview', newUrl: 'https://docs.sparc.science/docs/overview' },
    { oldUrl: 'help/tools-and-resources', newUrl: 'https://docs.sparc.science/docs/tools-and-resources' },
    { oldUrl: 'help/integrations', newUrl: 'https://docs.sparc.science/docs/integrations' },
    { oldUrl: 'help/standards', newUrl: 'https://docs.sparc.science/docs/standards' },
    { oldUrl: 'help/about', newUrl: 'https://docs.sparc.science/docs/about' },
    { oldUrl: 'help/community', newUrl: 'https://docs.sparc.science/docs/community' },
    { oldUrl: 'help/events', newUrl: 'https://docs.sparc.science/docs/events' },
    { oldUrl: 'help/help', newUrl: 'https://docs.sparc.science/docs/help' },
  ]

  const match = redirectUrls.find(item => to.fullPath.includes(item.oldUrl))

  if (match) {
    return navigateTo(match.newUrl, { external: true, redirectCode: 301 })
  }
})
