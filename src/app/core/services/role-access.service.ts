import { Injectable } from '@angular/core';
import { Asesor } from '../models/asesor.model';

@Injectable({
  providedIn: 'root'
})
export class RoleAccessService {
  public canAccessAdmin(asesor: Asesor | null | undefined): boolean {
    return this.hasAnyRole(asesor, ['administrador', 'moderador']);
  }

  public hasAnyRole(
    asesor: Asesor | null | undefined,
    expectedRoles: string[]
  ): boolean {
    if (!asesor) {
      return false;
    }

    const normalizedRoles = this.resolveRoles(asesor);

    return expectedRoles.some((role) =>
      normalizedRoles.includes(this.normalizeValue(role))
    );
  }

  public resolveRoles(asesor: Asesor | null | undefined): string[] {
    const roles = new Set<string>();

    for (const role of asesor?.roles || []) {
      const normalizedRole = this.normalizeValue(role);

      if (normalizedRole) {
        roles.add(normalizedRole);
      }
    }

    const normalizedCargo = this.normalizeValue(asesor?.cargo);

    if (normalizedCargo) {
      roles.add(normalizedCargo);
    }

    for (const role of this.readPersistedRoles()) {
      const normalizedRole = this.normalizeValue(role);

      if (normalizedRole) {
        roles.add(normalizedRole);
      }
    }

    return Array.from(roles);
  }

  private readPersistedRoles(): string[] {
    if (typeof window === 'undefined' || typeof window.localStorage === 'undefined') {
      return [];
    }

    try {
      const rawRoles = window.localStorage.getItem('auth_roles');

      if (!rawRoles) {
        return [];
      }

      const parsedRoles = JSON.parse(rawRoles);

      return Array.isArray(parsedRoles)
        ? parsedRoles.filter((role): role is string => typeof role === 'string')
        : [];
    } catch (error) {
      console.warn('[RoleAccessService] No se pudieron leer auth_roles', error);
      return [];
    }
  }

  private normalizeValue(value: unknown): string {
    return typeof value === 'string'
      ? value.trim().toLowerCase()
      : '';
  }
}
