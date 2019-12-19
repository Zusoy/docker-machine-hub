export interface Machine
{
    Name: string;
    State: string;
    ConfigVersion: number;
    DriverName: string;
    Driver: Driver;
    HostOptions: HostOptions;
}

export interface Driver
{
    Boot2DockerImportVM: string;
    Boot2DockerURL: string;
    CPU: number;
    DNSProxy: boolean;
    DiskSize: number;
    HostDNSResolver: boolean;
    HostInterfaces: object;
    HostOnlyCIDR: string;
    HostOnlyNicType: string;
    HostOnlyNoDHCP: boolean;
    HostOnlyPromiscMode: string;
    IPAddress: string;
    MachineName: string;
    Memory: number;
    NatNicType: string;
    NoShare: boolean;
    NoVTXCheck: boolean;
    SSHKeyPath: string;
    SSHPort: number;
    SSHUser: string;
    ShareFolder: string;
    StorePath: string;
    SwarmDiscovery: string;
    SwarmHost: string;
    SwarmMaster: boolean;
    UIType: string;
    VBoxManager: object;
}

export interface HostOptions
{
    Disk: number;
    Driver: string;
    Memory: number;
    AuthOptions: AuthOptions;
    EngineOptions: EngineOptions;
    SwarmOptions: SwarmOptions;
}

export interface AuthOptions
{
    CaCertPath: string;
    CaCertRemotePath: string;
    CaPrivateKeyPath: string;
    CertDir: string;
    ClientCertPath: string;
    ClientKeyPath: string;
    ServerCertPath: string;
    ServerCertRemotePath: string;
    ServerCertSANs: [];
    ServerKeyPath: string;
    ServerKeyRemotePath: string;
    StorePath: string;
}

export interface EngineOptions
{
    ArbitraryFlags: [];
    Dns: string;
    Env: [];
    GraphDir: string;
    InsecureRegistry: [];
    InstallURL: string;
    Ipv6: boolean;
    Labels: [];
    LogLevel: string;
    RegistryMirror: [];
    SelinuxEnabled: boolean;
    StorageDriver: string;
    TlsVerify: boolean;
}

export interface SwarmOptions
{
    Address: string;
    Agent: boolean;
    ArbitraryFlags: [];
    ArbitraryJoinFlags: [];
    Discovery: string;
    Env: any;
    Heartbeat: number;
    Host: string;
    Image: string;
    IsExperimental: boolean;
    IsSwarm: boolean;
    Master: boolean;
    Overcommit: number;
    Strategy: string;
}