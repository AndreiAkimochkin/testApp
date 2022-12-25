export type ApplicationsType = {
    "id": number,
    "caption": string,
}

export type ApplicationsArrayType = {
    all_app:ApplicationsType[],
}



export type InterfacesType = {
    "id": number,
    "caption": string,
    "status": string,
}

export type InterfacesArrayType = {
    all_int:InterfacesType[],
}



export type NodesType = {
    "id": number,
    "caption": string,
    "status": number,
    "interface": number,
    "admin": number,
}

export type NodesArrayType = {
    all_nodes:NodesType[],
}



export type MetricsType = {
    "id": number,
    "date_time": string,
    "cpu_utilization": number,
    "memory_utilization": number,
    "disk_utilization": number,
}

export type MetricsArrayType = {
    all_metrics:MetricsType[],
}

export type StatusesType = {
    "id": number,
    "color": string,
    "description": string,
}

export type StatusesArrayType = {
    all_statuses:StatusesType[],
}


